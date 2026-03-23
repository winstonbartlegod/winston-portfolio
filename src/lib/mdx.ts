import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  image?: string;
  readingTime?: string;
  featured?: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readingTime: string;
}

async function getPostsDirectory() {
  const path = await import('node:path');
  return path.join(process.cwd(), 'content/posts');
}

async function getPostFileNames() {
  const fs = await import('node:fs/promises');

  try {
    const postsDirectory = await getPostsDirectory();
    const fileNames = await fs.readdir(postsDirectory);
    return fileNames.filter((fileName) => fileName.endsWith('.mdx'));
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');
  const postsDirectory = await getPostsDirectory();
  const fileNames = await getPostFileNames();

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const rt = readingTime(content);

      return {
        slug,
        ...(data as PostFrontmatter),
        readingTime: rt.text,
      } as PostMeta;
    })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');
  const postsDirectory = await getPostsDirectory();
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const rt = readingTime(content);

    return {
      slug,
      ...(data as PostFrontmatter),
      content,
      readingTime: rt.text,
    } as Post;
  } catch {
    return null;
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  const fileNames = await getPostFileNames();
  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''));
}
