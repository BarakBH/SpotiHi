import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private snackbar: MatSnackBar) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [
        Validators.required,
        Validators.pattern('^(?![0-9])[a-zA-Z0-9]+$') // No spaces, only English characters and numbers, and cannot start with a number
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{6,}$') // At least 1 uppercase letter, 1 number, no spaces
      ]]
    });
  }

  // openSnackBar(message: string): void{
  //   this.snackbar.open(message, 'סגירה', {
  //     duration: 3000,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'top',
  //     direction: 'rtl'
  //   });
  // }

  onSubmit() {
    if (this.registerForm.valid) {
      // this.openSnackBar("הרישום בוצע בהצלחה ! הינך מועבר לדף הכניסה ..");
      console.log('Form Submitted', this.registerForm.value);
      alert("רישום בוצע בהצלחה, אתם מועברים לדף הכניסה ...")
      this.router.navigate(['']);
    }
  }
}
