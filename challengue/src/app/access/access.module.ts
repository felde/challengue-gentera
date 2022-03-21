import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AccessComponent } from './access.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


@NgModule({
  declarations: [
    LoginComponent,
    AccessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccessRoutingModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzNotificationModule
  ]
})
export class AccessModule { }
