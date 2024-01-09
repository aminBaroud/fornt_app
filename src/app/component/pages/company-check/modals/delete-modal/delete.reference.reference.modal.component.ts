import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-request-model',
  templateUrl: './delete.reference.modal.component.html',
  styleUrl: './delete.reference.modal.component.scss'
})
export class DeleteReferenceModalComponent {
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
