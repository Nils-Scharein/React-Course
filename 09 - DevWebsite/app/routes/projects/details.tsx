import { Link, useParams } from 'react-router';
import LoadingSpinner from '@/components/LoadingSpinner';
import useFetch from '@/hooks/useFetch';
import type { project } from '@/types/project';
import type { Route } from './+types';

const ProjectDetails = ({ loaderData }: Route.ComponentProps) => {
  const { projectId } = useParams();

  const {
    data: project,
    isLoading,
    error,
  } = useFetch<project>(`http://localhost:8222/projects/${projectId}`);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !project) {
    return (
      <div className="p-6 text-center text-[var(--text-color)]">
        <p>Error loading project: {error || 'Project not found.'}</p>
        <Link
          to="/projects"
          className="text-[var(--link-color)] hover:text-[var(--link-hover)]"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

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
