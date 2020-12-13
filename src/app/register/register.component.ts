import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { IUserService } from '../services/users/users.service.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    @Inject('IUserService') private userService: IUserService,
    private router: Router  
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let username = form.value.username;
    // TODO: Hash password
    let password = form.value.password;
    let email = form.value.email;

    let user = new User();
    user.username = username;
    user.password = password;
    user.email = email;

    console.log(`${user.username} ${user.password} ${user.email}`);

    this.userService.saveUser(user);
    this.router.navigate(["/posts"]);
  }

}
