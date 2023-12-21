import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { NotFoundComponent } from './component/pages/not-found/not-found.component';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent , pathMatch: 'full'  },
  { path: 'home', component: HomeComponent , pathMatch: 'full'},
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
