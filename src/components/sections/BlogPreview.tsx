'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import type { PostMeta } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

interface BlogPreviewProps {
  posts: PostMeta[];
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              06. Writing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="section-title mb-0"
            >
              Latest Posts
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="flex items-center gap-1.5 text-sm text-gold-400 hover:text-gold-300 transition-colors font-medium"
            >
              All Posts <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="glass-card p-6 flex flex-col gap-4 h-full hover:border-white/15 transition-all duration-300 group block"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {post.tags?.slice(0, 2).map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-white group-hover:text-gold-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-slate-500 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.05] text-xs text-slate-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={10} />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={10} />
                    {post.readingTime}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
