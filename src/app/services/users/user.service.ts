import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IUserService } from './users.service.interface';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserService implements IUserService {
  constructor(private httpClient : HttpClient) { }

  public saveUser(user: User) : void {
    let body = user;

    this.httpClient.post<void>(`http://localhost:8080/api/users`, body).subscribe((success) => {
      console.log(success);
    });
  }
}
