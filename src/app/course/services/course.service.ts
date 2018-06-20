import Course from '../models/course.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CourseService {

  api_url = 'http://localhost:3000';
  courseUrl = `${this.api_url}/api/course`;
  coursesByStreamUrl = `${this.api_url}/api/course/coursesbystream`;

  constructor(
    private http: HttpClient
  ) { }

  //Create course, takes a Course Object
  createCourse(course: Course): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.courseUrl}`, course);
  }

  //Read course, takes no arguments
  getCourses(): Observable<Course[]>{
    return this.http.get(this.courseUrl).map(res  => {
      //Maps the response object sent from the server        
      return res["data"].docs as Course[];
    })
  }

  //Update course, takes a Course Object as parameter
  updateCourse(course:Course){
    let editUrl = `${this.courseUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, course);
  }

  deleteCourse(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.courseUrl}/${id}`
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    })
  }

  getCoursesByStream(stream:string): any{    
    var params={params:{stream: stream}};
    console.log("stream:::",params);    
    return this.http.get(this.coursesByStreamUrl, params).map(res  => {
      //Maps the response object sent from the server        
      return res["data"].docs as Course[];
    })
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}