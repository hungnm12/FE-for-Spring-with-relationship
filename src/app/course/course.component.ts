import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  course = {
    name: '',
    description: '',
  };

  onSubmit() {
    console.log(this.course);
  }
}
