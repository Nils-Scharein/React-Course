import { Link } from 'react-router';
import type { project } from '@/types/project';

type ProjectCardProps = {
  project: project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      key={project.id}
      className="bg-[var(--card-bg)] text-[var(--text-color)]
        transition-transform transition-colors duration-300
        hover:bg-[var(--border-color)] hover:scale-105
        rounded-lg flex flex-col"
      to={`/projects/${project.id}`}
    >
      <div className="w-full h-32 overflow-hidden rounded-t-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h1 className="text-[var(--accent-color)] text-2xl pb-2">
          {project.title}
        </h1>

        <p className="text-xs pb-2 flex-grow text-[var(--text-muted-color)]">
          {project.description}
        </p>

        <div className="flex justify-between pt-2 text-sm text-[var(--text-muted-color)]">
          <p>
            {project.categories.length > 3
              ? project.categories.slice(0, 3).join(', ')
              : project.categories.join(', ')}
          </p>
          <p>{project.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
