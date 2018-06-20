import Enquiry from '../models/enquiry.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class EnquiryService {

  api_url = 'http://localhost:3000';
  enquiryUrl = `${this.api_url}/api/enquiry`;

  constructor(
    private http: HttpClient
  ) { }

  //Create enquiry, takes a Enquiry Object
  createEnquiry(enquiry: Enquiry): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.enquiryUrl}`, enquiry);
  }

  //Read enquiry, takes no arguments
  getInquiries(): Observable<Enquiry[]>{
    return this.http.get(this.enquiryUrl).map(res  => {
      //Maps the response object sent from the server        
      return res["data"].docs as Enquiry[];
    })
  }

  //Update enquiry, takes a Enquiry Object as parameter
  updateEnquiry(enquiry:Enquiry){
    let editUrl = `${this.enquiryUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, enquiry);
  }

  deleteEnquiry(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.enquiryUrl}/${id}`
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