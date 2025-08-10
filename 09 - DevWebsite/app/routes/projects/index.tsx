import type {Route} from "./+types/index";
import Posts from "~/routes/posts";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "posts"},
        {name: "description", content: "Development Website"},
    ];
}

const Projects = () => {
    return (
        <section className="text-3xl font-bold text-white mb-8 text-center">
            Projects
        </section>
    )
}
export default Projects