import Students from '../models/students.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class StudentsService {

  api_url = 'http://localhost:3000';
  studentUrl = `${this.api_url}/api/students`;

  constructor(
    private http: HttpClient
  ) { }

  //Create student, takes a Students Object
  createStudent(student: Students): Observable<any>{
    //returns the observable of http post request 
    console.log(student);
    return this.http.post(`${this.studentUrl}`, student);
  }

  //Read student, takes no arguments
  getStudents(): Observable<Students[]>{
    return this.http.get(this.studentUrl).map(res  => {
      //Maps the response object sent from the server        
      return res["data"].docs as Students[];
    })
  }

  //Update student, takes a Students Object as parameter
  updateStudent(student:Students){
    let editUrl = `${this.studentUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, student);
  }

  deleteStudent(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.studentUrl}/${id}`
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    })
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}