import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-confirm-sent-model',
  templateUrl: './sent.modal.component.html',
  styleUrl: './sent.modal.component.scss'
})
export class ConfirmSentModalComponent {
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
