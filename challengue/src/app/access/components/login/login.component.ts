import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usr?: string;
  public pass?: String;
  constructor(
    private _router: Router,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
  }
  public login(): void {
    if (this.usr == "user" && this.pass == "root") {
      this._router.navigate(["/pages/welcome"])
    }
    else {
      this.notification.create(
        "error",
        'Upss...',
        'La credenciales ingresadas son invalidas.'
      );
    }
  }
}
