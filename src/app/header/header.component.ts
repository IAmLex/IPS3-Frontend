import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing/data-sharing.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedIn: boolean;

  constructor(
    private dataSharing: DataSharingService,
    private router: Router
  ) { 
    this.dataSharing.isLoggedIn.subscribe( value => {
      this.loggedIn = value;
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem("token"))
      this.dataSharing.isLoggedIn.next(true);
   }

  public logout() {
    sessionStorage.clear();
    this.dataSharing.isLoggedIn.next(false);

    this.router.navigate(["/"]);
  }
}
