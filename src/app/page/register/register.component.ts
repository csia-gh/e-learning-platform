import { Component } from '@angular/core';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  constructor(
    // private auth: AuthService,
  ) {}

  form = 'student';
}
