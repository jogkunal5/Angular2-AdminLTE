import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../services/students.service';
import { CourseService } from '../../course/services/course.service';
import Students from '../models/students.model';
import 'rxjs/add/operator/toPromise';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { } from 'jquery';
import { } from 'morris.js';
import { } from 'jquery-knob';
import { } from 'bootstrap-datepicker';
import { } from 'jqueryui';
import { } from 'daterangepicker';
import { } from 'jquery.slimscroll';
import * as moment from 'moment';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AddStudentComponent implements OnInit {

  constructor(
    //Private studentservice will be injected into the component by Angular Dependency Injector
    private http: Http,
    private router: Router,
    private route: ActivatedRoute, 
    private studentService: StudentsService,
    private courseService: CourseService
  ) { }

  //Declaring the new student Object and initilizing it
  public studentData: Students = new Students()  
  studentList: Students[];
  student: any = {};
  allCourses: any = [];
  selectedCourses: any = [];  
  dropdownSettings = {};
  id: string;
  batch: string;
  system: string;

  //An Empty list for the visible student list
  ngOnInit(): void {

    //jQuery('.datepicker').datepicker({format: 'dd-mm-yyyy'});

    this.route.params.subscribe(params=>{
      this.id=params['id'];
    })

    //At component initialization the     
    this.studentService.getStudents().subscribe(student => {
      this.studentList = student
      
      if(this.id != undefined){        
        for(var i=0; i<this.studentList.length; i++){
          if(this.studentList[i]._id == this.id){
            //this.student = this.studentList[i];
              // edit mode              
              this.studentData = this.studentList[i];            
            break;
          }
        }
      }
    })
    
    this.courseService.getCourses().subscribe(coursesData => {                  
      this.allCourses = this.getUniqueCourses(coursesData);
    })

    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };

  }

  getUniqueCourses(coursesData){
    var resArr = [];    
    coursesData.forEach(function(item){
      var i = resArr.findIndex(x => x.name == item.name);
      if(i <= -1){
            resArr.push({_id: item._id, name: item.name});
      }
      return null;
    });    
    return resArr;    
  }

  //This method will get called on Create button event
  
  create() {
    console.log("batch::: "+this.batch);
    console.log("system::: "+this.system);
    console.log("student data::: "+this.studentData);
    this.studentService.createStudent(this.studentData).subscribe((res) => {
        this.studentList.push(res.data)
        this.studentData = new Students()
        alert("Students saved successfully");
      }, err => {        
        alert("Saved unsuccessfull");
      })
  }

  update(student: Students) { 
    console.log("Edit student==>>>"+student)
    this.studentService.updateStudent(student).subscribe(res => {
      alert("Course updated successfully");
    }, err => {
      this.update(student)
      alert('Update Unsuccessfull');
    })    
  }

  onItemSelect(item:any){            
    this.selectedCourses.push(item);    
    console.log(this.selectedCourses)
  }

  onItemDeSelect(item:any){                    
    for (let data of this.selectedCourses) {
      if (item._id === data._id && item.name === data.name) {
          this.selectedCourses.splice(this.selectedCourses.indexOf(data), 1);
          break;
      }
    }    
  }

  onSelectAll(items: any){    
    this.selectedCourses = items;
    console.log(this.selectedCourses)
  }

}
