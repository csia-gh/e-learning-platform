import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Course, courseCategories } from 'src/app/model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courseCollection = this.firestore.collection<Course>('courses');
  courseList$: any = this.courseCollection.valueChanges({idField: 'id'});
  categories = courseCategories;

  constructor(private firestore: AngularFirestore) {}



  ngOnInit(): void {
  }

}
