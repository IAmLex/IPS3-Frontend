import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IAuthenticationService } from './authentication.service.interface';
import { User } from 'src/app/models/user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService implements IAuthenticationService {
  constructor(private httpClient : HttpClient, private router: Router  ) { }

  public login(user: User) : void {
    let body = user;

    this.httpClient.post<any>(`http://localhost:8080/api/authentication/login`, body).subscribe((token) => {
      sessionStorage.setItem("token", token.token);
      sessionStorage.setItem("userId", token.userId);

      this.router.navigate(['/posts']);
    });
  }
}
