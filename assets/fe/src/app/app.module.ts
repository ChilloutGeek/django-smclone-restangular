import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';

import { GlobalsModule } from 'src/app/components/globals/globals.module'
import { FeedModule } from 'src/app/components/feed/feed.module';
import { APP_ROUTES } from 'src/app/app.route';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot(APP_ROUTES),
    FeedModule,
    HttpClientModule,
    GlobalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
