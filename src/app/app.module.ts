import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main/main.component';
import { ContentComponent } from './content/content/content.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { LoginLogoutDirective } from './login-logout/login-logout.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContentComponent,
    SidebarComponent,
    LoginLogoutDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
