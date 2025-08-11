import { Link } from 'react-router';
import type { project } from '@/types/project';
import type { Route } from './+types';

export async function clientLoader({
  request,
  params,
}: Route.ClientLoaderArgs): Promise<project> {
  const res = await fetch(`http://localhost:8222/projects/${params.projectId}`);

  console.log(res);
  if (!res.ok) {
    throw new Response('Project not found', { status: 404 });
  }

  const project: project = await res.json();
  console.log(project);
  return project;
}

export function HydrateFallback() {
  return (
    <div id="loading-splash">
      <div id="loading-splash-spinner" />
      <p>Loading, please wait...</p>
    </div>
  );
}

const ProjectDetails = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData as unknown as project;
  return (
    <div className="py-5 px-6 bg-gray-900 text-white transition-colors duration-300">
      <div className="text-left mb-4">
        <Link to="/projects" className="hover:text-blue-400">
          ← Back to Projects
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-4xl mb-6">{project.title}</h1>
        <img src={project.image} alt={project.title} className="mx-auto mb-4" />
        <p className={'m-4'}>{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Link to Project
        </a>
        <div className="flex justify-between mt-4">
          <p className="text-gray-500">{project.categories.join(', ')}</p>
          <p className="text-gray-500"> {project.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
