import { User } from './user.model';
import { Comment } from './comment.model';

export class Post {
    public id : number;
    public user : User = new User();
    public comments : Comment[] = [];
    public content : string;
    public caption : string;
    public createdAt : Date;
    public deletedAt : Date;
}
