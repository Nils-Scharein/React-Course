import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About Page' },
    { name: 'description', content: 'Development Website' },
  ];
}

const AboutPage = () => {
  return (
    <section className="text-3xl font-bold text-[var(--text-color)] mb-8 text-center">
      <div className="flex flex-col items-center justify-center">
        <h1>I'm Nils</h1>
        <img src="/images/profile.png" alt="Profil" />
      </div>
    </section>
  );
};

export default AboutPage;
