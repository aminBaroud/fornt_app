import { Component } from '@angular/core';
@Component({
  selector: 'app-delete-reference-model',
  templateUrl: './delete.reference.model.component.html',
  styleUrl: './delete.reference.model.component.scss',
})
export class DeleteReferenceModelComponent {
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
