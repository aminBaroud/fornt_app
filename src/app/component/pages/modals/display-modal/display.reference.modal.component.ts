import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-display-reference-model',
  templateUrl: './display.reference.modal.component.html',
  styleUrl: './display.reference.modal.component.scss'
})
export class DisplayReferenceModalComponent {
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
