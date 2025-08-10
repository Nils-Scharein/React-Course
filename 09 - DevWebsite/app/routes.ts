import {type RouteConfig, index, route} from "@react-router/dev/routes";

const r = (path: string) => `./routes/${path}/index.tsx`;


export default [
    index(r("home")),
    route("about", r("about")),
    route("contact", r("contact")),
    route("posts", r("posts")),
    route("projects", r("projects")),
] satisfies RouteConfig;