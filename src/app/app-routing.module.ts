import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { NotFoundComponent } from './component/pages/not-found/not-found.component';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/auth/login/login.component';
import { ForgetPasswordComponent } from './component/auth/forget-password/forget.password.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { PlanComponent } from './component/auth/plan/plan.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent , pathMatch: 'full'  },
  { path: '', component: HomeComponent , pathMatch: 'full'  },
  { path: 'register', component: RegisterComponent , pathMatch: 'full'  },
  { path: 'forget-password', component: ForgetPasswordComponent , pathMatch: 'full'  },
  { path: 'home', component: HomeComponent , pathMatch: 'full'},
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
  { path: 'plan', component: PlanComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
