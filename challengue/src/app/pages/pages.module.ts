import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { PagesComponent } from './pages.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { MealsComponent } from './components/meals/meals.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzGridModule,
    NzDropDownModule,
    NzCarouselModule
  ],
  declarations: [WelcomeComponent, PagesComponent, IngredientsComponent, MealsComponent],
  exports: [WelcomeComponent, PagesComponent],
  providers: [{ provide: NZ_I18N, useValue: es_ES }]
})
export class PagesModule { }
