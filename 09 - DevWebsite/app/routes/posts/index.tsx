import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'posts' },
    { name: 'description', content: 'Development Website' },
  ];
}

const Posts = () => {
  return (
    <section className="text-3xl font-bold text-[var(--text-color)] mb-8 text-center">
      Posts
    </section>
  );
};

export default Posts;
