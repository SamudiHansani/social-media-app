import { INavLink } from "@/types";

export const sidebarLinks: INavLink[] = [
    {
        route: "/",
        label: "Home",
    },
    {
        route: "/create-post",
        label: "Create Post",
    },
];

export const titleColors: string[] = [
    "#4287f5",
    "#f5f242",
    "#f56342"
];

export const BASE_URL = 'http://localhost:8080/posts';
