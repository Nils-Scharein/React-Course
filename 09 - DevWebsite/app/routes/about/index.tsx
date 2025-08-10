import type {Route} from "./+types/index";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "About Page"},
        {name: "description", content: "Development Website"},
    ];
}

const AboutPage = () => {
    return (
        <>
            <h1 className="text-3xl font-bold text-white mb-2">👋 Hi, I'm Nils</h1>
        </>
    );
};

export default AboutPage