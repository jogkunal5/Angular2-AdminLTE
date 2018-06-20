import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { StudentsService } from '../services/students.service';
import Student from '../models/students.model';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})

export class ManageStudentComponent implements OnInit {

  //jQuery:any;

  id:number;
  studentId: any = {};
  listFilter: string;  
  studentName: string;
  public newStudent: Student = new Student()
  studentList: Student[];  
  coursesArr: any = [];

  //sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  //initializing p to one
  p: number = 1;

  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private http: Http,
    private router: Router,
    private route: ActivatedRoute, 
    private studentService: StudentsService
  ) { }

  sort(key){
     this.key = key;
     this.reverse = !this.reverse;
  }

  ngOnInit(): void {
    
    //At component initialization the 
    this.studentService.getStudents().subscribe(student => {
        //assign the todolist property to the proper http response
        this.studentList = student
        console.log(student)
    })    
  }

  deleteStudent(student: Student) {
    console.log("==>>"+student._id);
    if(confirm("Are you sure to delete?")) {
      this.studentService.deleteStudent(student._id).subscribe(res => {
        this.studentList.splice(this.studentList.indexOf(student), 1);
      })
    }
  }

  showCourses(student){    
    (<any>$('#studCourseModal')).modal('show');    
    this.coursesArr = student.course;
    this.studentName = student.firstName+" "+student.lastName;
  }

}