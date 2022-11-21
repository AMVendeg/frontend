import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SUNCMECardComponent } from './sun-cme-card/sun-cme-card.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SUNCMECardComponent,
    InputsComponent,
    SidebarComponent,
    LoginRegisterComponent,
    AddUserComponent,
    UserDetailsComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
