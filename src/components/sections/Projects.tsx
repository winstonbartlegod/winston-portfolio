'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { profile } from '@/data/profile';

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('featured');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const displayed = profile.projects.filter(
    (p) => filter === 'all' || p.featured,
  );

  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          05. Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-title"
        >
          Featured Work
        </motion.h2>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex gap-2 mt-8 mb-10"
        >
          {(['featured', 'all'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === f
                  ? 'bg-gold-400 text-[#06090F]'
                  : 'text-slate-500 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {f === 'featured' ? 'Featured' : 'All Projects'}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card overflow-hidden group hover:border-white/15 transition-all duration-300"
              >
                {/* Image area */}
                <div className="relative h-44 bg-gradient-to-br from-[#0D1117] to-[#161B22] overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Abstract code/network pattern */}
                      <div className="text-6xl opacity-10 font-mono text-gold-400 select-none">
                        {'{ }'}
                      </div>
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />

                  {/* Year badge */}
                  <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-500 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/[0.05]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors"
                      >
                        <Github size={13} /> Source
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-gold-400 transition-colors"
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                    {!project.github && !project.demo && (
                      <span className="text-xs text-slate-700 italic">Private / Internal</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={15} /> More on GitHub
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
