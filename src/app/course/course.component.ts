import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from './services/course.service';
import Course from './models/course.model';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(
    //Private courseservice will be injected into the component by Angular Dependency Injector
    private http: Http,
    private router: Router,
    private route: ActivatedRoute, 
    private courseService: CourseService
  ) { }

  ngOnInit() {
    
  }

  //Declaring the new course Object and initilizing it
  public newCourse: Course = new Course()  
  courseList: Course[];



}
