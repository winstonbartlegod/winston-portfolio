'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Brain, TrendingUp, Wrench } from 'lucide-react';
import { profile } from '@/data/profile';

const categoryIcons: Record<string, React.ReactNode> = {
  Languages:            <Code2 size={15} />,
  'AI / Machine Learning': <Brain size={15} />,
  'Finance & Risk':     <TrendingUp size={15} />,
  'Tools & Platforms':  <Wrench size={15} />,
};

function SkillBar({ name, level, icon, delay }: { name: string; level: number; icon: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm">{icon}</span>
          <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">{name}</span>
        </div>
        <span className="text-xs font-mono text-slate-600 group-hover:text-gold-400 transition-colors">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          04. Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-title"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {profile.skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass-card p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="p-2 rounded-lg bg-gold-400/10 text-gold-400">
                  {categoryIcons[group.category] ?? <Code2 size={15} />}
                </div>
                <h3 className="font-semibold text-white text-sm">{group.category}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-4">
                {group.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    delay={0.1 + gi * 0.05 + si * 0.04}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
