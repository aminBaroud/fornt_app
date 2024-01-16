import { Component } from '@angular/core';
@Component({
  selector: 'app-request-model',
  templateUrl: './request.model.component.html',
  styleUrl: './request.model.component.scss',
})
export class RequestModelComponent {
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
