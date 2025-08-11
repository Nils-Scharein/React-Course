import { Outlet } from 'react-router';
import Navbar from '@/components/Navbar';

const MainLayout = () => {
  return (
    <div className="bg-[var(--bg-color)] text-[var(--text-color)] min-h-screen transition-colors duration-300">
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </div>
  );
};

export default MainLayout;
