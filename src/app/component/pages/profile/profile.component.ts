import { Component, ViewChild } from '@angular/core';
import { PayModalComponent } from '../../auth/chose-plan/pay_modal/pay.modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  list=[{},{},{}];

  constructor(){
    localStorage.setItem('showLogin','false');
  }

  public decline(){
    console.log("Data -- decline");
  }
  public complete(value:any){
    console.log("Data -- complete");

  }

  @ViewChild(PayModalComponent) payModalComponent: any ;
  plan = "";
  openPopup(value:any) {
    console.log(value);
    this.plan = value;
    this.payModalComponent.openPopup();
  }



}
