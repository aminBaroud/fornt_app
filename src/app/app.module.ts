import { NotFoundComponent } from './component/pages/not-found/not-found.component'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { ProfileComponent } from './component/pages/profile/profile.component';
import { HomeComponent } from './component/pages/home/home.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './component/auth/login/login.component';
import { PayModalComponent } from './component/auth/chose-plan/pay_modal/pay.modal.component';
import { ChosePlanComponent } from './component/auth/chose-plan/chose.plan.component';
import { PlanComponent } from './component/auth/chose-plan/plans/plan.component';
import { ReferenceModalComponent } from './component/pages/reference/welcome/modal/reference.modal.component';
import { ReferenceWelcomeComponent } from './component/pages/reference/welcome/reference.welcome.component';
import { SliderComponent } from './component/auth/chose-plan/slidershow/slider.component';
import { TalentCheckComponent } from './component/pages/talent-check/talent.check.component';
import { SquareComponent } from './component/pages/reference/start/square/square.component';
import { StartComponent } from './component/pages/reference/start/start.component';
import { StarComponent } from './component/pages/reference/start/star/star.component';
import { CompanyCheckComponent } from './component/pages/company-check/company.check.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ChosePlanComponent,
    PayModalComponent,
    PlanComponent,
    ReferenceModalComponent,
    ReferenceWelcomeComponent,
    SliderComponent,
    TalentCheckComponent,
    StartComponent,
    StarComponent,
    SquareComponent,
    CompanyCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
