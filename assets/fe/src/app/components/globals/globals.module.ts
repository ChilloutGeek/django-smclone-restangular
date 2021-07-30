import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { UIRouterModule } from '@uirouter/angular';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UIRouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class GlobalsModule { }
