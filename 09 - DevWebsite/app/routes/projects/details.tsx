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
    <div
      id="loading-splash"
      className="text-center p-10 text-[var(--text-color)]"
    >
      <div
        id="loading-splash-spinner"
        className="w-8 h-8 border-4 border-[var(--ring-color)] border-t-transparent rounded-full animate-spin mx-auto mb-4"
      />
      <p>Loading, please wait...</p>
    </div>
  );
}

const ProjectDetails = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData as unknown as project;

  return (
    <div className="py-5 px-6 bg-[var(--card-bg)] text-[var(--text-color)] transition-colors duration-300">
      <div className="text-left mb-4">
        <Link
          to="/projects"
          className="hover:text-[var(--link-hover)] text-[var(--link-color)] transition"
        >
          ← Back to Projects
        </Link>
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl mb-6 text-[var(--accent-color)]">
          {project.title}
        </h1>

        <img
          src={project.image}
          alt={project.title || 'Project image'}
          className="mx-auto mb-4 rounded shadow"
        />

        <p className="m-4 text-[var(--text-muted-color)]">
          {project.description}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--accent-color)] text-[var(--accent-foreground)]
            px-6 py-2 rounded hover:bg-[var(--accent-hover)] transition-colors"
        >
          Link to Project
        </a>

        <div className="flex justify-between mt-6 text-sm text-[var(--text-muted-color)]">
          <p>{project.categories.join(', ')}</p>
          <p>{project.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
