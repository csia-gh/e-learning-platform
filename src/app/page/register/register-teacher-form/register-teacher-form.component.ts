import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-teacher-form',
  templateUrl: './register-teacher-form.component.html',
  styleUrls: ['./register-teacher-form.component.scss'],
})
export class RegisterTeacherForm {
  constructor() // private auth: AuthService,
  {}

  inSubmission = false;

  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
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
    name: this.username,
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

    setTimeout(() => {
      try {
        // await this.auth.createUser(this.registerForm.value);
      } catch (e) {
        console.error(e);

        this.alertMsg = 'An unexpected error occured. Please try again later';
        this.alertColor = 'warning';
        this.inSubmission = false;
        return;
      }

      this.alertMsg = 'Success! Your account has been creted.';
      this.alertColor = 'success';
    }, 2000)
  }
}
