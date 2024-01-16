import { Component } from '@angular/core';
@Component({
  selector: 'app-confirm-delete-model',
  templateUrl: './confirm.delete.model.component.html',
  styleUrl: './confirm.delete.model.component.scss',
})
export class ConfirmDeleteModelComponent {
  displayStyle: string = 'none';
  constructor() {
    this.displayStyle = 'none';
  }

  public openPopup(value: any) {
    this.displayStyle = 'block';
  }
  public closePopup() {
    this.displayStyle = 'none';
  }

  public submit() {
    console.log('i clicked here ');
  }
}
