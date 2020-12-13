import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { IAuthenticationService } from '../services/authentication/authentication.service.interface';
import { DataSharingService } from '../services/data-sharing/data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    @Inject('IAuthenticationService') private authenticationService: IAuthenticationService,
    private dataSharing: DataSharingService,
    private router: Router  
  ) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    let email = form.value.email;
    // TODO: Hash password
    let password = form.value.password;

    let user = new User();
    user.email = email;
    user.password = password;

    this.authenticationService.login(user);
    this.dataSharing.isLoggedIn.next(true);
    this.router.navigate(["/posts"]);
  }
}
