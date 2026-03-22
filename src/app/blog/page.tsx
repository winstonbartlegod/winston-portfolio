// Server Component — fetches posts and passes to client grid
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { BlogIndexClient } from '@/components/blog/BlogIndexClient';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing on AI, machine learning, quantitative finance, and fintech.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogIndexClient posts={posts} />;
}
