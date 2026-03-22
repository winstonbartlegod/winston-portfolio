'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Coffee, Zap } from 'lucide-react';
import { profile } from '@/data/profile';

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-card p-4 text-center">
      <div className="text-2xl font-extrabold text-gradient-gold">{value}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="section-label"
          >
            01. About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Who I Am
          </motion.h2>

          <div className="grid lg:grid-cols-5 gap-12 mt-12 items-start">
            {/* Photo column */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                {/* Photo */}
                <div className="relative aspect-square rounded-2xl overflow-hidden glass-card gradient-border">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  {/* Fallback */}
                  <div className="absolute inset-0 flex items-center justify-center text-7xl font-extrabold text-gold-400/30 bg-[#0D1117]">
                    {profile.initials}
                  </div>
                </div>

                {/* Location chip */}
                <div className="absolute -bottom-4 -right-4 flex items-center gap-2 glass-card px-3 py-2 text-xs text-slate-300">
                  <MapPin size={12} className="text-gold-400" />
                  {profile.location}
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                {profile.stats.map((s) => (
                  <StatCard key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </motion.div>

            {/* Text column */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 flex flex-col gap-5"
            >
              {profile.bio.map((paragraph, i) => (
                <p key={i} className="text-slate-400 leading-relaxed text-[0.95rem]">
                  {paragraph}
                </p>
              ))}

              {/* Quick facts */}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <Zap size={14} className="text-gold-400 shrink-0" />
                  Currently working on IRRBB Modelling at{''}
                  <span className="text-slate-300 font-medium">Ernst & Young HK</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <Coffee size={14} className="text-teal shrink-0" />
                  When not coding: Just chilling
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
