import { Link } from 'react-router';

type HeroProps = {
  name?: string;
  text?: string;
};

const Hero = ({
  name = '[Name]',
  text = ' I build friendly web experiences and help others become confident, modern developers.',
}: HeroProps) => {
  return (
    <header className="text-center py-20 px-4 bg-[color:var(--bg-color)] text-[color:var(--text-color)] transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-4">Hey, I'm {name} 👋</h2>
      <p className="text-lg text-[color:var(--text-muted-color)] max-w-2xl mx-auto mb-6">
        {text}
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="bg-[color:var(--accent-color)] text-[color:var(--accent-foreground)] px-6 py-2 rounded hover:bg-[color:var(--accent-hover)] transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="border border-[color:var(--accent-color)] text-[color:var(--link-color)] px-6 py-2 rounded hover:bg-[color:var(--accent-color)] hover:text-[color:var(--accent-foreground)] transition"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Hero;
