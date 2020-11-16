import { User } from './user.model';

export class Post {
    public id : number;
    public user : User = new User();
    public content : string;
    public caption : string;
    public createdAt : Date;
    public deletedAt : Date;
}
