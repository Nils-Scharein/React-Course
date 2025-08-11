import { useState } from 'react';
import ProjectCard from '@/features/projects/ProjectCard';
import useFetch from '@/hooks/useFetch';
import useLocal from '@/hooks/useLocal';
import type { project } from '@/types/project';
import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Projects' },
    { name: 'description', content: 'Development Website' },
  ];
}

const Projects = ({ loaderData }: Route.ComponentProps) => {
  const {
    data: projects,
    isLoading,
    error,
  } = useFetch<project[]>('http://localhost:8222/projects');

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useLocal('projectsPerPage', 2);

  if (isLoading) {
    return <p>Lade...</p>;
  }

  if (error) {
    return <p>Fehler: {error}</p>;
  }

  if (!projects || projects.length === 0) {
    return <p>Keine Projekte gefunden.</p>;
  }

  // calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  
  const renderPagination = () => {
    return (
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded border transition-colors
        ${
          currentPage === i + 1
            ? 'bg-[var(--accent-color)] text-[var(--accent-foreground)] border-[var(--accent-color)]'
            : 'bg-[var(--card-bg)] text-[var(--text-color)] border-[var(--border-color)] hover:bg-[var(--input-bg)]'
        }
        focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="transition-colors duration-300">
      <div className="flex gap-4 items-start flex-nowrap">
        {/* Linker Bereich – Filterbar */}
        <div className="flex-grow basis-0 mb-4 p-4 bg-[var(--card-bg)] text-[var(--text-color)] rounded border border-[var(--border-color)]">
          <h1 className="text-xl font-semibold mb-2">Filter</h1>
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded bg-[var(--input-bg)] text-[var(--text-color)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
          />
        </div>

        {/* Rechter Bereich – kompakt */}
        <div className="basis-[6%] shrink-0 h-fit p-2 self-start bg-[var(--card-bg)] text-[var(--text-color)] rounded border border-[var(--border-color)] min-w-[80px]">
          <p className="text-xs mb-1 text-center">Per Page</p>
          <p className="text-sm font-semibold text-center mb-2">
            {projectsPerPage}
          </p>
          <div className="flex flex-col gap-1 items-center">
            <button
              className="bg-[color:var(--accent-color)] text-[color:var(--accent-foreground)] px-2 py-1 rounded hover:bg-[color:var(--accent-hover)] transition text-xs w-full"
              onClick={() => {
                if (projectsPerPage < projects.length)
                  setProjectsPerPage((prev) => prev + 1);
              }}
            >
              ↑
            </button>
            <button
              className="bg-[color:var(--accent-color)] text-[color:var(--accent-foreground)] px-2 py-1 rounded hover:bg-[color:var(--accent-hover)] transition text-xs w-full"
              onClick={() => {
                if (projectsPerPage > 1) setProjectsPerPage((prev) => prev - 1);
              }}
            >
              ↓
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        {currentProjects?.length > 0 ? (
          currentProjects.map((singleProject) => (
            <ProjectCard key={singleProject.id} project={singleProject} />
          ))
        ) : (
          <p className="text-center text-[var(--text-muted-color)]">
            No projects found.
          </p>
        )}
      </div>
      {renderPagination()}
    </div>
  );
};

export default Projects;
