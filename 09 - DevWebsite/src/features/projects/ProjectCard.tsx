import { Link } from 'react-router';
import type { project } from '@/types/project';

type ProjectCardProps = {
  project: project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      key={project.id}
      className="bg-gray-900
         transition-transform transition-colors duration-300
         hover:bg-gray-800 hover:scale-105 rounded-lg flex flex-col"
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
        <h1 className="text-blue-400 text-2xl pb-2">{project.title}</h1>

        <p className="text-xs pb-2 flex-grow">{project.description}</p>

        <div className="flex justify-between pt-2 text-sm text-gray-500">
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
