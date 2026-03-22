import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx';
import { mdxComponents } from '@/components/blog/MDXComponents';
import { formatDate } from '@/lib/utils';

type MdxRemoteOptions = NonNullable<Parameters<typeof MDXRemote>[0]['options']>;

// ── Static params (required for static export) ──────────────────
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ── Metadata ────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

// ── MDX options ─────────────────────────────────────────────────
const mdxOptions: MdxRemoteOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'github-dark-dimmed', keepBackground: true }] as const,
    ],
  },
};

// ── Page ────────────────────────────────────────────────────────
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allSlugs = getAllPostSlugs();
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const nextSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags?.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug mb-5">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-6 border-b border-white/[0.06]">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readingTime}
            </span>
          </div>
        </header>

        {/* MDX Content */}
        <article className="prose-custom">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={mdxOptions}
          />
        </article>

        {/* Divider */}
        <hr className="border-white/[0.06] my-12" />

        {/* Share */}
        <div className="flex items-center gap-3 mb-10">
          <Share2 size={14} className="text-slate-500" />
          <span className="text-xs text-slate-500">Share this post:</span>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gold-400 hover:text-gold-300 transition-colors"
          >
            Twitter/X
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gold-400 hover:text-gold-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Prev / Next */}
        <div className="grid sm:grid-cols-2 gap-4">
          {prevSlug && (() => {
            const prev = getPostBySlug(prevSlug);
            if (!prev) return null;
            return (
              <Link
                href={`/blog/${prevSlug}`}
                className="glass-card p-4 hover:border-white/15 transition-all group"
              >
                <p className="text-[10px] text-slate-600 uppercase tracking-wider mb-1.5">← Previous</p>
                <p className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors leading-snug">
                  {prev.title}
                </p>
              </Link>
            );
          })()}
          {nextSlug && (() => {
            const next = getPostBySlug(nextSlug);
            if (!next) return null;
            return (
              <Link
                href={`/blog/${nextSlug}`}
                className="glass-card p-4 hover:border-white/15 transition-all group sm:text-right"
              >
                <p className="text-[10px] text-slate-600 uppercase tracking-wider mb-1.5">Next →</p>
                <p className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors leading-snug">
                  {next.title}
                </p>
              </Link>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
