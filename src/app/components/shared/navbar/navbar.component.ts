import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  profile: any;

  constructor(private auth0: AuthService) {
    this.auth0.handleAuthentication();
  }

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth0.renewTokens();
    }
  }

  Login() {
    this.auth0.login();
  }

  Logout() {
    this.auth0.logout();
  }
}
