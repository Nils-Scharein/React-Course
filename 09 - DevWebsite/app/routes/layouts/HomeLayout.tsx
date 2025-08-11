import { Outlet } from 'react-router';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Hero
        name={'Nils'}
        text={
          "I'm taking my first steps in web development, learning to build friendly web experiences and grow into a confident, modern developer."
        }
      />
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
