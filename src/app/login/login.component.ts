import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  signInWithEmail() {
    this.authService.signInRegular(this.email, this.password).then((res) => {
      this.router.navigate(['dashboard']);
    }).catch((err) => console.log('error: ' + err));
  }


}
