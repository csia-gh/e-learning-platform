import { Component } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent  {
  credentials = {
    email: '',
    password: '',
  }


  login() {
    console.log(this.credentials);
  }
}
