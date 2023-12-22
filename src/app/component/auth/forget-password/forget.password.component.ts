import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget.password.component.html',
  styleUrl: './forget.password.component.scss'
})
export class ForgetPasswordComponent {

  public submit(){
    console.log('i clicked here ');
  }

}
