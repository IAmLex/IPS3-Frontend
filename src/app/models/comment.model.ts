import { Post } from './post.model';
import { User } from './user.model';

export class Comment {
    public id: number;
    public user: User = new User();
    public post: Post = new Post();
    public text: String;
    public createdAt: Date;
    public deletedAt: Date;
}
