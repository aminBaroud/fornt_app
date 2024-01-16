import { Component } from '@angular/core';
@Component({
  selector: 'app-share-model',
  templateUrl: './share.model.component.html',
  styleUrl: './share.model.component.scss',
})
export class ShareModelComponent {
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
