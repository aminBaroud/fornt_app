import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 isActive =true;
  public showPassword(){
    console.log('i clicked here ');

    this.isActive = !this.isActive;
  }

  public submit(){
    console.log('i clicked here ');
  }

}
