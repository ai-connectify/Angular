import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FragmentsModule } from './fragments/fragments.module';

import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [
    AppComponent      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthenticationModule,
    FragmentsModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
