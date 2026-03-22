'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, FileText, ArrowRight } from 'lucide-react';
import type { DocumentEntry } from '@/lib/documents';

type DocumentsGridProps = {
  documents: DocumentEntry[];
  showAllLink?: boolean;
};

export function DocumentsGrid({ documents, showAllLink = false }: DocumentsGridProps) {
  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {documents.map((doc, index) => (
          <motion.a
            key={doc.url}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="glass-card overflow-hidden hover:border-white/15 transition-all duration-300 group"
          >
            <div className="relative aspect-[4/5] bg-[#0D1117]">
              <iframe
                src={`${encodeURI(doc.url)}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                title={`${doc.title} preview`}
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/90 to-transparent p-5">
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 rounded-full p-2"
                    style={{ background: `${doc.color}20`, color: doc.color, border: `1px solid ${doc.color}30` }}
                  >
                    <FileText size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.24em] text-gold-300/80">
                      {doc.shortName}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-100 leading-snug">
                      {doc.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {doc.school}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 flex items-center justify-between gap-3 border-t border-white/[0.05]">
              <p className="text-xs text-slate-500 leading-relaxed">
                {doc.degree}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-gold-400 group-hover:text-gold-300 transition-colors shrink-0">
                Open PDF
                <ExternalLink size={14} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {showAllLink ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <Link href="/documents" className="btn-secondary">
            All Papers
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      ) : null}
    </>
  );
}
