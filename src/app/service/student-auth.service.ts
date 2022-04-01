import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentAuthService {
  private studentsCollection: AngularFirestoreCollection<Student>
  public isAuthenticated$: Observable<boolean>

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
  ) {
    this.studentsCollection = this.db.collection('students');
    this.isAuthenticated$ = auth.user.pipe(
      map(user => !!user)
    );
  }

  public async createStudent(studentData: Student) {
    if (!studentData.password) {
      throw new Error('Password not provided');
    }

    const studentCred = await this.auth.createUserWithEmailAndPassword(
      studentData.email, studentData.password
    );

    if (!studentCred.user) {
      throw new Error('User cannot be found');
    }

    await this.studentsCollection.doc(studentCred.user.uid).set({
      username: studentData.username,
      email: studentData.email,
      firstName: studentData.firstName,
      lastName: studentData.lastName,
      bio: studentData.bio,
      courses: [],
    });

    await studentCred.user.updateProfile({
      displayName: studentData.username
    });
  }
}
