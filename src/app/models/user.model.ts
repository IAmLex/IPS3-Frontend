import { Post } from './post.model';

export class User {
    public id: number;
    public posts: Post[] = [];
    public username: string;
    public password: string;
    public email: string;
    public createdAt: Date;
    public deletedAt: Date;
}