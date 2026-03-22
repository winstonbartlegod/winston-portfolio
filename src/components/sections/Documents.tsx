'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DocumentsGrid } from '@/components/documents/DocumentsGrid';
import { getAllDocuments } from '@/lib/documents';

export function Documents() {
  const documents = getAllDocuments();
  const previewDocuments = documents.slice(0, 6);

  if (documents.length === 0) return null;

  return (
    <section id="documents" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              06. PDF Archive
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="section-title mb-0"
            >
              Papers, Projects & Assignments
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Link
              href="/documents"
              className="flex items-center gap-1.5 text-sm text-gold-400 hover:text-gold-300 transition-colors font-medium"
            >
              All PDFs <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl leading-relaxed text-sm md:text-base"
        >
          A growing archive of thesis work, university assignments, and project write-ups with first-page previews.
        </motion.p>

        <DocumentsGrid
          documents={previewDocuments}
          showAllLink={false}
        />
      </div>
    </section>
  );
}
