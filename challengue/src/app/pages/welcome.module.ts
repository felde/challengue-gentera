import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { PagesComponent } from './pages.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './components/ingredients/ingredients.component';


@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    NzButtonModule
  ],
  declarations: [WelcomeComponent, PagesComponent, IngredientsComponent],
  exports: [WelcomeComponent, PagesComponent],
  providers: [{ provide: NZ_I18N, useValue: es_ES }]
})
export class WelcomeModule { }
