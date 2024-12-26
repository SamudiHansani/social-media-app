import { Comment } from "./comment";

export interface Post {
    id: number;
    title: string;
    description: string;
    titleColor: string;
    commentsCount: number;
    comments?: Comment[];
}