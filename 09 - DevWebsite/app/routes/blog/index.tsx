import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Blog' },
    { name: 'description', content: 'Development Website' },
  ];
}

const Blog = () => {
  return (
    <section className="text-3xl font-bold text-white mb-8 text-center">
      Blog
    </section>
  );
};

export default Blog;
