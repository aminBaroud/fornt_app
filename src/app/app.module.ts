import { HttpClientModule  , HTTP_INTERCEPTORS  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChosePlanComponent } from './component/auth/chose-plan/chose.plan.component';
import { PayModalComponent } from './component/auth/chose-plan/pay_modal/pay.modal.component';
import { PlanComponent } from './component/auth/chose-plan/plans/plan.component';
import { SliderComponent } from './component/auth/chose-plan/slidershow/slider.component';
import { LoginComponent } from './component/auth/login/login.component';
import { CompanyCheckComponent } from './component/pages/company-check/company.check.component';
import { HomeComponent } from './component/pages/home/home.component';
import { CustomModalsModule } from './component/pages/models/custom.modals.module';
import { NotFoundComponent } from './component/pages/not-found/not-found.component';
import { ProfileComponent } from './component/pages/profile/profile.component';
import { StartComponent } from './component/pages/reference/start/start.component';
import { ReferenceModalComponent } from './component/pages/reference/welcome/modal/reference.modal.component';
import { ReferenceWelcomeComponent } from './component/pages/reference/welcome/reference.welcome.component';
import { TalentCheckComponent } from './component/pages/talent-check/talent.check.component';
import { SharedModule } from './component/shared/shared.module';
// Interceptor
import { InterceptorService } from './_interceptor/interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    ChosePlanComponent,
    PayModalComponent,
    PlanComponent,
    ReferenceModalComponent,
    ReferenceWelcomeComponent,
    SliderComponent,
    TalentCheckComponent,
    StartComponent,
    CompanyCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    CustomModalsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
