'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Zap } from 'lucide-react';
import { profile } from '@/data/profile';

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 max-w-4xl"
          >
            <div className="flex flex-col gap-5">
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
