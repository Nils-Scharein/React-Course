import ProjectCard from '@/features/projects/ProjectCard';
import type { project } from '@/types/project';
import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'posts' },
    { name: 'description', content: 'Development Website' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: project[] }> {
  const response = await fetch('http://localhost:8222/projects');
  const result: project[] = await response.json();
  return { projects: result };
}

const Projects = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;

  return (
    <div>
      <div className={'mb-4 bg-gray-400'}>
        <h1>Filter</h1>
        <input />
      </div>

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        {projects.map((singleProject) => (
          <ProjectCard key={singleProject.id} project={singleProject} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
