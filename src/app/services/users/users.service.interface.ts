import { User } from 'src/app/models/user.model';

export interface IUserService {
    saveUser(user: User) : void
}