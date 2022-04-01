import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentAuthService } from './../../../service/student-auth.service';

@Component({
  selector: 'app-register-student-form',
  templateUrl: './register-student-form.component.html',
  styleUrls: ['./register-student-form.component.scss'],
})
export class RegisterStudentFormComponent {
  constructor(private auth: StudentAuthService, private router: Router) {}

  inSubmission = false;

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  bio = new FormControl('');
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirmPassword = new FormControl('', [Validators.required]);
  showAlert = false;
  alertMsg = 'Plase wait! Your account is being created.';
  alertColor = 'primary';

  registerForm = new FormGroup({
    username: this.username,
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName,
    bio: this.bio,
    password: this.password,
    confirmPassword: this.confirmPassword,
  });

  async register() {
    this.showAlert = true;
    this.alertMsg = 'Plase wait! Your account is being created.';
    this.alertColor = 'primary';
    this.inSubmission = true;

    try {
      await this.auth.createStudent(this.registerForm.value);
    } catch (e) {
      console.error(e);

      this.alertMsg = 'An unexpected error occured. Please try again later';
      this.alertColor = 'warning';
      this.inSubmission = false;
      return;
    }

    this.alertMsg = 'Success! Your account has been creted.';
    this.alertColor = 'success';

    setTimeout(() => {
      this.router.navigate(['', 'courses']);
    }, 1000)
  }
}
