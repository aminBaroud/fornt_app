import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-request-model',
  templateUrl: './sent.modal.component.html',
  styleUrl: './sent.modal.component.scss'
})
export class SentModalComponent {
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
