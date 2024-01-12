import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-new-reference-model',
  templateUrl: './new.reference.modal.component.html',
  styleUrl: './new.reference.modal.component.scss'
})
export class NewReferenceModalComponent {
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
