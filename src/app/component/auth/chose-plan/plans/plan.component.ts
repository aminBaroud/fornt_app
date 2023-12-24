import { Component, ViewChild } from '@angular/core';
import {PayModalComponent} from '../pay_modal/pay.modal.component';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss'
})
export class PlanComponent {

  @ViewChild(PayModalComponent) payModalComponent: any ;
  plan = "";
  openPopup(value:any) {
    console.log(value);
    this.plan = value;
    this.payModalComponent.openPopup();
  }


}
