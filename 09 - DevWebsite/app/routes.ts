import {
  type RouteConfig,
  index,
  route,
  layout,
} from '@react-router/dev/routes';

const r = (path: string) => `./routes/${path}/index.tsx`;

export default [
  layout('./routes/layouts/HomeLayout.tsx', [index(r('home'))]),
  layout('./routes/layouts/MainLayout.tsx', [
    route('about', r('about')),
    route('blog', r('blog')),
    route('contact', r('contact')),
    route('posts', r('posts')),
    // Einzelprojekt-Detailseite vor der Liste
    route('projects/:projectId', './routes/projects/details.tsx'),
    route('projects', r('projects')),
  ]),
] satisfies RouteConfig;
