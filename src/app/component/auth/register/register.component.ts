import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../../../_services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  //signupForm!: FormBuilder;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  first_name: string | any = new FormControl('');
  last_name: string | any = new FormControl('');
  email: string | any = new FormControl('');
  phone: string | any = new FormControl('');
  password: string | any = new FormControl('');
  confirm_password: string | any = new FormControl('');

  signupForm = this.formBuilder.group({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
  });

  /*   ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: new FormControl(['', Validators.required]),
      lastName: new FormControl(['', Validators.required]),
      email_address: new FormControl(['', Validators.required]),
      phone_number: new FormControl(['', Validators.required]),
      pass: new FormControl(['', Validators.required]),
      confirm_pass: new FormControl(['', Validators.required]),
    })
  } */

  onSubmit(): void {
    const data = {
      first_name: this.first_name,
      last_name: this.last_name,
      password: this.password,
      confirm_password: this.confirm_password,
      email: this.email,
      phone: this.phone,
    };
    console.log('data ===> ', data);
    this.authService
      .signup(data)
      .pipe(first())
      .subscribe({
        next: () => {
          //this.router.navigate(['/profile']);
        },
        error: (error) => {
          console.log('Error : ', error);
          this.errorNotification(error.error);
        },
      });
  }

  errorNotification(value: string) {
    return; /* Swal.fire('Error !!!', value, 'error'); */
  }
}
