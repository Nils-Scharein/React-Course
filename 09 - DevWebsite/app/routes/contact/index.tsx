import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Contact Me' },
    { name: 'description', content: 'Development Website' },
  ];
}

const Contact = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-[var(--text-color)] mb-8 text-center">
        Contact Me
      </h2>
    </section>
  );
};

export default Contact;
