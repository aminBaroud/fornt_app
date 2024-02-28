import { Component, ViewChild } from '@angular/core';
import { ConfirmDeleteModelComponent } from '../confirm-delete-model/confirm.delete.model.component';
@Component({
  selector: 'app-delete-reference-model',
  templateUrl: './delete.reference.model.component.html',
  styleUrl: './delete.reference.model.component.scss',
})
export class DeleteReferenceModelComponent {

  @ViewChild(ConfirmDeleteModelComponent) confirmDeleteModelComponent: any ;

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
    this.displayStyle = 'none';
    this.confirmDeleteModelComponent.openPopup();
  }
}
