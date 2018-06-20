import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import Course from '../models/course.model';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class EditCourseComponent implements OnInit {

  constructor(
    //Private courseservice will be injected into the component by Angular Dependency Injector
    private http: Http,
    private router: Router,
    private route: ActivatedRoute, 
    private courseService: CourseService
  ) { }

  public newCourse: Course = new Course()
  courseArr: Course[] = [];
  courseList: Course[];
  course: any = {};
  id:string;


  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params['id'];
    })

    this.courseService.getCourses().subscribe(course => {
      //assign the courselist property to the proper http response
      this.courseList = course
      
      for(var i=0; i<this.courseList.length; i++){
        if(this.courseList[i]._id == this.id){
          this.course = this.courseList[i];
          break;
        }
      }

    })

  }

  update(course: Course) { 
    console.log("Edit course==>>>"+course)
    this.courseService.updateCourse(course).subscribe(res => {
      alert("Course updated successfully");
    }, err => {
      this.update(course)
      alert('Update Unsuccessful');
    })    
  }

}
