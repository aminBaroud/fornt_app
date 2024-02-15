import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './_guard/auth.guard';
import { ChosePlanComponent } from './component/auth/chose-plan/chose.plan.component';
import { ForgetPasswordComponent } from './component/auth/forget-password/forget.password.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { CompanyCheckComponent } from './component/pages/company-check/company.check.component';
import { ContactUsComponent } from './component/pages/contact-us/contact.us.component';
import { HomeComponent } from './component/pages/home/home.component';
import { NotFoundComponent } from './component/pages/not-found/not-found.component';
import { ProfileComponent } from './component/pages/profile/profile.component';
import { StartComponent } from './component/pages/reference/start/start.component';
import { ReferenceWelcomeComponent } from './component/pages/reference/welcome/reference.welcome.component';
import { ResourcesComponent } from './component/pages/resources/resources.component';
import { TalentCheckComponent } from './component/pages/talent-check/talent.check.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent, pathMatch: 'full' },
  { path: 'auth/signup', component: RegisterComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'auth/register', component: RegisterComponent, pathMatch: 'full' },
  {
    path: 'auth/forget-password',
    component: ForgetPasswordComponent,
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  { path: 'plans', component: ChosePlanComponent, pathMatch: 'full' },
  { path: 'aboutUs', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'reference',
    component: ReferenceWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'start',
    component: StartComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: 'resources',
    component: ResourcesComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  { path: 'talent-check', component: TalentCheckComponent, pathMatch: 'full' },
  {
    path: 'company-check',
    component: CompanyCheckComponent,
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
