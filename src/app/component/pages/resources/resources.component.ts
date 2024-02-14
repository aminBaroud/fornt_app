import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss',
})
export class RessourcesComponent {
  constructor() {
    localStorage.setItem('showLogin', 'false');
  }

  public decline() {
    console.log('Data -- decline');
  }
  public complete(value: any) {
    console.log('Data -- complete');
  }
}
