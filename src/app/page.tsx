import { Hero }        from '@/components/sections/Hero';
import { About }       from '@/components/sections/About';
import { Experience }  from '@/components/sections/Experience';
import { Education }   from '@/components/sections/Education';
import { Skills }      from '@/components/sections/Skills';
import { Projects }    from '@/components/sections/Projects';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { Contact }     from '@/components/sections/Contact';
import { getAllPosts }  from '@/lib/mdx';

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <BlogPreview posts={posts} />
      <Contact />
    </>
  );
}
