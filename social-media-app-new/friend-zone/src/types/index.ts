export type INavLink = {
    route: string;
    label: string;
}

export type INewPost = {
    title: string;
    description: string;
    titleColor: string;
}

export type IPost = {
    id: number;
    title: string;
    description: string;
    titleColor: string;
    commentsCount: number;
    comments?: IComment[];
}

export type IComment = {
    id: number;
    comment: string;
}