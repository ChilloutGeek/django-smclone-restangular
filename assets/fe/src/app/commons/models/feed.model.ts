export interface Post {
    id: number;
    title: string;
    description: string;
    imagecontent: string;
    created:any;
    published_date:any;
}

export interface Profile {
    id: number;
    user: number;
    bio: string;
    profilepic: string;
}