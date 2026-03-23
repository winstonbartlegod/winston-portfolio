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

function stripQuotes(value: string) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseInlineArray(value: string) {
  return value
    .slice(1, -1)
    .split(',')
    .map((item) => stripQuotes(item))
    .filter(Boolean);
}

function parseFrontmatterValue(value: string) {
  const trimmed = value.trim();

  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    return parseInlineArray(trimmed);
  }

  return stripQuotes(trimmed);
}

function parseFrontmatter(source: string): { data: Partial<PostFrontmatter>; content: string } {
  if (!source.startsWith('---\n')) {
    return { data: {}, content: source };
  }

  const endIndex = source.indexOf('\n---\n', 4);
  if (endIndex === -1) {
    return { data: {}, content: source };
  }

  const rawFrontmatter = source.slice(4, endIndex);
  const content = source.slice(endIndex + 5);
  const lines = rawFrontmatter.split('\n');
  const data: Record<string, unknown> = {};

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.trim()) continue;

    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!match) continue;

    const [, key, rawValue] = match;

    if (rawValue.trim() === '') {
      const items: string[] = [];
      let j = i + 1;

      while (j < lines.length) {
        const itemLine = lines[j];
        const itemMatch = itemLine.match(/^\s*-\s*(.*)$/);
        if (!itemMatch) break;
        items.push(stripQuotes(itemMatch[1]));
        j += 1;
      }

      data[key] = items;
      i = j - 1;
      continue;
    }

    data[key] = parseFrontmatterValue(rawValue);
  }

  return { data: data as Partial<PostFrontmatter>, content };
}

function getReadingTimeText(content: string) {
  const wordCount = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
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
      const { data, content } = parseFrontmatter(fileContents);

      return {
        slug,
        ...(data as PostFrontmatter),
        readingTime: getReadingTimeText(content),
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
    const { data, content } = parseFrontmatter(fileContents);

    return {
      slug,
      ...(data as PostFrontmatter),
      content,
      readingTime: getReadingTimeText(content),
    } as Post;
  } catch {
    return null;
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  const fileNames = await getPostFileNames();
  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''));
}
