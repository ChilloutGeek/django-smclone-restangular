export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
}


export interface Profile {
    id: number;
    user: User;
    bio: string;
    profilepic: string;
}