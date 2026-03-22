import type { Metadata } from 'next';
import { DocumentsGrid } from '@/components/documents/DocumentsGrid';
import { getAllDocuments } from '@/lib/documents';

export const metadata: Metadata = {
  title: 'All Papers',
  description: 'A full archive of thesis work, assignments, and project PDFs.',
};

export default function DocumentsPage() {
  const documents = getAllDocuments();

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div>
          <p className="section-label m-0">PDF Archive</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            All Papers
          </h1>
          <p className="text-slate-400 mt-3 text-base max-w-2xl">
            A full archive of thesis work, project reports, and university assignments with first-page previews.
          </p>
        </div>

        <DocumentsGrid documents={documents} />
      </div>
    </div>
  );
}
