import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { CourseService } from '../services/course.service';
import Course from '../models/course.model';
import {ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ManageCourseComponent implements OnInit {

  id:number;
  courseId: any = {};
  listFilter: string;  
  public newCourse: Course = new Course()
  courseList: Course[];

  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private http: Http,
    private router: Router,
    private route: ActivatedRoute, 
    private courseService: CourseService
  ) { }

  //sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  //initializing p to one
   p: number = 1;

  ngOnInit(): void {

    //At component initialization the 
    this.courseService.getCourses().subscribe(course => {
        //assign the todolist property to the proper http response
        this.courseList = course
        console.log(course)
    })    
  }

  deleteCourse(course: Course) {
    console.log("==>>"+course._id);
    if(confirm("Are you sure to delete?")) {
      this.courseService.deleteCourse(course._id).subscribe(res => {
        this.courseList.splice(this.courseList.indexOf(course), 1);
      })
    }
  }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }


}