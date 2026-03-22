import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export const mdxComponents: MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-white mt-10 mb-4 tracking-tight">{children}</h1>
  ),
  h2: ({ children, id }) => (
    <h2 id={id} className="group text-2xl font-bold text-white mt-10 mb-3 tracking-tight scroll-mt-20">
      <span className="inline-flex items-center gap-2">
        <span>{children}</span>
        {id ? (
          <a
            href={`#${id}`}
            aria-label={`Link to ${id}`}
            className="opacity-0 hover:text-gold-400 group-hover:opacity-40 text-gold-400 text-base transition-colors"
          >
            #
          </a>
        ) : null}
      </span>
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3 id={id} className="text-xl font-semibold text-white mt-8 mb-2 scroll-mt-20">
      {children}
    </h3>
  ),

  // Paragraph
  p: ({ children }) => <div className="text-slate-400 leading-relaxed my-4 text-[0.95rem]">{children}</div>,

  // Links
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-400 hover:text-gold-300 underline underline-offset-2 inline-flex items-center gap-0.5 transition-colors"
        >
          {children}
          <ExternalLink size={11} className="inline opacity-60" />
        </a>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className="text-gold-400 hover:text-gold-300 underline underline-offset-2 transition-colors">
          {children}
        </a>
      );
    }
    return (
      <Link href={href ?? '#'} className="text-gold-400 hover:text-gold-300 underline underline-offset-2 transition-colors">
        {children}
      </Link>
    );
  },

  // Lists
  ul: ({ children }) => <ul className="list-none pl-0 my-4 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside my-4 space-y-2 text-slate-400">{children}</ol>,
  li: ({ children }) => (
    <li className="flex gap-2.5 text-slate-400 text-[0.95rem] leading-relaxed">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-400/50 shrink-0" />
      <span>{children}</span>
    </li>
  ),

  // Blockquote
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-gold-400/50 pl-5 my-6 italic text-slate-400">
      {children}
    </blockquote>
  ),

  // Inline code
  code: ({ children }) => (
    <code className="font-mono text-teal bg-teal-dim rounded px-1.5 py-0.5 text-[0.85em]">
      {children}
    </code>
  ),

  // Pre (code blocks — styled via rehype-pretty-code in globals.css)
  pre: ({ children }) => (
    <div className="my-6 rounded-xl overflow-hidden">{children}</div>
  ),

  // Horizontal rule
  hr: () => <hr className="border-white/[0.06] my-10" />,

  // Image
  img: ({ src, alt }) => (
    <figure className="my-8">
      <div className="relative w-full rounded-xl overflow-hidden border border-white/[0.06]" style={{ aspectRatio: '16/9' }}>
        <Image
          src={src ?? ''}
          alt={alt ?? ''}
          fill
          className="object-cover"
        />
      </div>
      {alt && <figcaption className="text-center text-xs text-slate-600 mt-2 italic">{alt}</figcaption>}
    </figure>
  ),

  // Table
  table: ({ children }) => (
    <div className="overflow-x-auto my-6 rounded-xl border border-white/[0.06]">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-white/[0.03]">{children}</thead>,
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-xs font-semibold text-gold-400 uppercase tracking-wider border-b border-white/[0.06]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-slate-400 border-b border-white/[0.04] last:border-0">{children}</td>
  ),

  // Custom callout component (use as <Callout> in MDX)
  Callout: ({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'tip' }) => {
    const styles = {
      info:    { bg: 'bg-blue-500/10',  border: 'border-blue-500/30',  icon: 'ℹ️' },
      warning: { bg: 'bg-gold-400/10',  border: 'border-gold-400/30',  icon: '⚠️' },
      tip:     { bg: 'bg-teal/10',       border: 'border-teal/30',       icon: '💡' },
    }[type];
    return (
      <div className={`${styles.bg} border ${styles.border} rounded-xl p-4 my-6 flex gap-3`}>
        <span className="text-lg shrink-0">{styles.icon}</span>
        <div className="text-sm text-slate-400 leading-relaxed">{children}</div>
      </div>
    );
  },
};
