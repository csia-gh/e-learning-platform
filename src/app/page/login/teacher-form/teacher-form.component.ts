import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent{
  credentials = {
    email: '',
    password: '',
  }


  login() {
    console.log(this.credentials);
  }
}
