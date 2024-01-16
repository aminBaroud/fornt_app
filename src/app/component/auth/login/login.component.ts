import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../../../_services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  isActive = true;
  isConnected = false;
  email: string | any = new FormControl('');
  password: string | any = new FormControl('');

  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  onSubmit(): void {
    this.AuthService.login(this.email.value, this.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.isConnected = true;
          this.router.navigate([returnUrl]);
        },
        error: (error) => {
          console.log('Error : ', error);
          this.errorNotification(error.error);
        },
      });
  }

  public showPassword() {
    //console.log('i clicked here ');
    this.isActive = !this.isActive;
  }

  /*   public submit() {
    console.log('i clicked here ');
  } */

  errorNotification(value: string) {
    return; /* Swal.fire('Error !!!', value, 'error'); */
  }
}
