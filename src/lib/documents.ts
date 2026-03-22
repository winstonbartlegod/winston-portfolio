import { profile } from '@/data/profile';

export type DocumentEntry = {
  title: string;
  url: string;
  school: string;
  shortName: string;
  degree: string;
  color: string;
};

export function getAllDocuments(): DocumentEntry[] {
  return profile.education.flatMap((edu) =>
    Array.isArray((edu as unknown as { documents?: { title: string; url: string }[] }).documents)
      ? ((edu as unknown as { documents: { title: string; url: string }[] }).documents).map((doc) => ({
          ...doc,
          school: edu.school,
          shortName: edu.shortName,
          degree: edu.degree,
          color: edu.color,
        }))
      : []
  );
}
