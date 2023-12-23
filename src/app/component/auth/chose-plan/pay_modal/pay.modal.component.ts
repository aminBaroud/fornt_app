import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-pay-model',
  templateUrl: './pay.modal.component.html',
  styleUrl: './pay.modal.component.scss'
})
export class PayModalComponent {
  displayStyle: string = "none";
  constructor(){
    this.displayStyle= "none";
  }

  public openPopup(value:any) {
    this.displayStyle = "block";
  }
  public closePopup() {
    this.displayStyle = "none";
  }

  public submit(){
    console.log('i clicked here ');
  }

}
