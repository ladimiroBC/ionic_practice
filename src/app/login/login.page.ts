import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  token: string = 'dsdljsljs';

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  login() {
    localStorage.setItem('token', this.token);
    this._router.navigate(['/home'])
  }

}
