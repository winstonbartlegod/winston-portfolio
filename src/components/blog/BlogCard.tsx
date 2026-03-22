import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import type { PostMeta } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

export function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="glass-card p-6 flex flex-col gap-4 hover:border-white/15 transition-all duration-300 group"
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {post.tags?.slice(0, 3).map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-base font-semibold text-white group-hover:text-gold-400 transition-colors leading-snug">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-sm text-slate-500 leading-relaxed flex-1">{post.excerpt}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
        <div className="flex items-center gap-3 text-xs text-slate-600">
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.readingTime}
          </span>
        </div>
        <ArrowRight
          size={14}
          className="text-slate-600 group-hover:text-gold-400 group-hover:translate-x-1 transition-all"
        />
      </div>
    </Link>
  );
}
