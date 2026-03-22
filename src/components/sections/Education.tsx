'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, FileText, ExternalLink } from 'lucide-react';
import { profile } from '@/data/profile';

export function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          03. Education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-title"
        >
          Academic Background
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-3 gap-5 mt-12">
          {profile.education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 flex flex-col gap-4 hover:border-white/15 group transition-all duration-300"
            >
              {/* Logo */}
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold transition-transform duration-300 group-hover:scale-105 overflow-hidden"
                  style={{ background: `${edu.color}18`, color: edu.color, border: `1px solid ${edu.color}25` }}
                >
                  {(edu.logo as string | undefined) ? (
                    <Image
                      src={edu.logo}
                      alt={edu.school}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  ) : (
                    edu.logoFallback
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <Calendar size={11} />
                  {edu.startYear} — {edu.endYear}
                </div>
              </div>

              {/* Degree & school */}
              <div>
                <h3 className="font-semibold text-white text-sm leading-snug">{edu.degree}</h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">{edu.school}</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-slate-600">
                  <MapPin size={10} />
                  {edu.location}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed">{edu.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/[0.04]">
                {edu.highlights.map((h) => (
                  <span key={h} className="tag-pill-teal">{h}</span>
                ))}
              </div>

              {/* Thesis download link */}
              {(edu as unknown as { thesisUrl?: string }).thesisUrl && (
                <a
                  href={(edu as unknown as { thesisUrl: string }).thesisUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 transition-colors font-medium mt-1"
                >
                  <FileText size={12} />
                  Download Bachelor Thesis
                  <ExternalLink size={10} className="opacity-60" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <h3 className="text-sm font-semibold text-slate-400 mb-4 flex items-center gap-2">
            <GraduationCap size={14} className="text-gold-400" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {profile.certifications.map((cert) => {
              const certImage = (cert as unknown as { image?: string }).image;
              return (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex flex-col gap-3 hover:border-white/15 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl">{cert.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors leading-snug">
                        {cert.title}
                      </p>
                      <p className="text-[10px] text-slate-600 mt-0.5">{cert.issuer}</p>
                      <p className="text-[10px] text-gold-400/70 mt-0.5">{cert.date}</p>
                    </div>
                  </div>
                  {certImage && (
                    <div className="relative w-full h-20 rounded-lg overflow-hidden border border-white/[0.06]">
                      <Image
                        src={certImage}
                        alt={`${cert.title} certificate`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
