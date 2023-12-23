import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { NotFoundComponent } from './component/pages/not-found/not-found.component';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/auth/login/login.component';
import { ForgetPasswordComponent } from './component/auth/forget-password/forget.password.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { ChosePlanComponent } from './component/auth/chose-plan/chose.plan.component';
import { ReferenceWelcomeComponent } from './component/pages/reference/welcome/reference.welcome.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent , pathMatch: 'full'  },
  { path: 'signup', component: RegisterComponent , pathMatch: 'full'  },
  { path: '', component: HomeComponent , pathMatch: 'full'  },
  { path: 'register', component: RegisterComponent , pathMatch: 'full'  },
  { path: 'forget-password', component: ForgetPasswordComponent , pathMatch: 'full'  },
  { path: 'home', component: HomeComponent , pathMatch: 'full'},
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
  { path: 'plans', component: ChosePlanComponent, pathMatch: 'full' },
  { path: 'aboutUs', component: HomeComponent, pathMatch: 'full' },
  { path: 'reference', component: ReferenceWelcomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
