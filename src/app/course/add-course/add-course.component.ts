import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import Course from '../models/course.model';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AddCourseComponent implements OnInit {

  constructor(
    //Private courseservice will be injected into the component by Angular Dependency Injector
    private http: Http,
    private router: Router,
    private route: ActivatedRoute, 
    private courseService: CourseService
  ) { }

  //Declaring the new course Object and initilizing it
  public newCourse: Course = new Course()  
  courseList: Course[];
  course: any = {};

  //An Empty list for the visible course list
  ngOnInit(): void {
      //At component initialization the 
      this.courseService.getCourses().subscribe(course => {
          //assign the courselist property to the proper http response
          this.courseList = course
          console.log(course)
      })
  }

  //This method will get called on Create button event
  
  create() {
    this.courseService.createCourse(this.newCourse).subscribe((res) => {
        this.courseList.push(res.data)
        this.newCourse = new Course()
        alert("Course saved successfully");
      }, err => {        
        alert("Saved unsuccessfull");
      })
  }

}