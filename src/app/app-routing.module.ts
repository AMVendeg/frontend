import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { SUNCMECardComponent } from './sun-cme-card/sun-cme-card.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cme-card', component: SUNCMECardComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'adduser', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
