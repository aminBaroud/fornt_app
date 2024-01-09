import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-confirm-delete-model',
  templateUrl: './confirm.delete.modal.component.html',
  styleUrl: './confirm.delete.modal.component.scss'
})
export class ConfirmDeleteModalComponent {
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
