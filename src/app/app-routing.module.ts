import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/register/register.component';
import { DiscDetailsComponent } from './components/disc-details/disc-details.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'home-page', component: HomePageComponent},
  { path: 'user-registration', component: RegisterComponent},
  { path: 'disc-details/:id', component: DiscDetailsComponent },
  { path: '*', component: WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
