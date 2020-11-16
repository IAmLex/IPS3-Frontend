import { User } from 'src/app/models/user.model';

export interface IAuthenticationService {
    login(user: User) : void
}