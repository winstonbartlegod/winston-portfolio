'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import { profile } from '@/data/profile';

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          02. Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-title"
        >
          Work History
        </motion.h2>

        {/* Timeline */}
        <div ref={ref} className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          {/* Animated fill line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
            style={{ originY: 0 }}
            className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/60 via-gold-400/30 to-transparent hidden md:block"
          />

          <div className="flex flex-col gap-8">
            {profile.experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 group"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg border border-white/10 z-10 relative transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${job.color}20`, color: job.color, borderColor: `${job.color}30` }}
                  >
                    {job.logoFallback}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass-card p-6 hover:border-white/15 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-semibold text-white">{job.title}</h3>
                        <span
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                          style={{
                            background: `${job.color}15`,
                            color: job.color,
                            border: `1px solid ${job.color}25`,
                          }}
                        >
                          {job.type}
                        </span>
                      </div>
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 mt-1 text-sm font-medium hover:text-gold-400 transition-colors"
                        style={{ color: job.color }}
                      >
                        {job.company}
                        <ExternalLink size={11} className="opacity-60" />
                      </a>
                    </div>

                    <div className="flex flex-col items-end gap-1 text-right">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Calendar size={11} />
                        {job.startDate} — {job.endDate ?? (
                          <span className="text-teal font-medium">Present</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-600">
                        <MapPin size={10} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Description bullets */}
                  <ul className="flex flex-col gap-2.5 mb-4">
                    {job.description.map((bullet, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-400 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-400/40 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
