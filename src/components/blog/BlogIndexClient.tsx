'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Rss } from 'lucide-react';
import type { PostMeta } from '@/lib/mdx';
import { BlogCard } from './BlogCard';

export function BlogIndexClient({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((p) => p.tags?.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt?.toLowerCase().includes(query.toLowerCase());
      const matchesTag = !activeTag || p.tags?.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [posts, query, activeTag]);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gold-400/10">
              <Rss size={18} className="text-gold-400" />
            </div>
            <p className="section-label m-0">Project Writing</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Project Writing</h1>
          <p className="text-slate-400 mt-3 text-base max-w-xl">
            Posts that can mix write-ups, project notes, code snippets, and GitHub links in one place.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-6"
        >
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
          <input
            type="search"
            placeholder="Search articles…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-gold-400/40 transition-colors"
          />
        </motion.div>

        {/* Tag filters */}
        {allTags.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {['', ...allTags].map((tag) => (
              <button
                key={tag || 'all'}
                onClick={() => setActiveTag(activeTag === tag ? '' : tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeTag === tag
                    ? 'bg-gold-400 text-[#06090F]'
                    : 'text-slate-500 border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {tag || 'All'}
              </button>
            ))}
          </motion.div>
        )}

        <p className="text-xs text-slate-600 mb-6">
          {filtered.length} post{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-600">
            <p className="text-lg">No posts found</p>
            <button
              onClick={() => { setQuery(''); setActiveTag(''); }}
              className="mt-3 text-sm text-gold-400 hover:text-gold-300 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
