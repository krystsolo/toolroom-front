import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/auth/login.service';
import {TokenStorage} from '../../services/auth/token-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential = {'username': '', 'password': ''};
  private loggedIn = false;

  constructor(private loginService: LoginService, private token: TokenStorage) {
  }

  onSubmit() {
    this.loginService.attemptAuth(this.credential.username, this.credential.password).subscribe(
      res => {
        console.log(res);
        this.token.saveToken(res.token);
        localStorage.setItem('token', res.token);
        location.reload();
      },
      error => {
          console.log(error);
      }
    );
  }

  ngOnInit() {
      this.loggedIn = this.token.isAuthenticated();
      console.log('is logged: ' + this.loggedIn);
  }

}
