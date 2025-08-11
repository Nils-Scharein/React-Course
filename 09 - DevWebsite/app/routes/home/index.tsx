import { useEffect } from 'react';
import Hero from '@/components/Hero';
import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Developer Site' },
    { name: 'description', content: 'Development Website' },
  ];
}

const Home = () => {
  const now = new Date().toISOString();

  if (typeof window == 'undefined') {
    console.log('Server Render At: ', now);
  } else {
    console.log('Client Hydration At: ', now);
  }

  useEffect(() => {
    console.log('window scroll: ', window.scrollX);
  }, []);

  return <h2 className="text-3xl font-bold text-white mb-8 text-center"></h2>;
};
export default Home;
