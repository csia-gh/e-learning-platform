import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { AboutComponent } from './page/about/about.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { InputComponent } from './common/input/input.component';
import { AlertComponent } from './common/alert/alert.component';
import { RegisterStudentFormComponent } from './page/register/register-student-form/register-student-form.component';
import { RegisterTeacherForm } from './page/register/register-teacher-form/register-teacher-form.component';
import { TeacherFormComponent } from './page/login/teacher-form/teacher-form.component';
import { StudentFormComponent } from './page/login/student-form/student-form.component';


import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { StudentCoursesComponent } from './page/student-courses/student-courses.component';
import { StudentProfileComponent } from './page/student-profile/student-profile.component';
import { CoursesComponent } from './page/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CarouselComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    InputComponent,
    AlertComponent,
    RegisterStudentFormComponent,
    RegisterTeacherForm,
    TeacherFormComponent,
    StudentFormComponent,
    StudentCoursesComponent,
    StudentProfileComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
