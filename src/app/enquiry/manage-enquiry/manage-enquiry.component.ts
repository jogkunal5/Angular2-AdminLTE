import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { EnquiryService } from '../services/enquiry.service';
import Enquiry from '../models/enquiry.model';
import {ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-manage-enquiry',
  templateUrl: './manage-enquiry.component.html',
  styleUrls: ['./manage-enquiry.component.css']
})

export class ManageEnquiryComponent implements OnInit {

  id:number;
  enquiryId: any = {};
  listFilter: string;  
  public newEnquiry: Enquiry = new Enquiry()
  enquiryList: Enquiry[];

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
    private enquiryService: EnquiryService
  ) { }

  sort(key){
     this.key = key;
     this.reverse = !this.reverse;
  }

  ngOnInit(): void {

    //At component initialization the 
    this.enquiryService.getInquiries().subscribe(enquiry => {
        //assign the todolist property to the proper http response
        this.enquiryList = enquiry
        console.log(enquiry)
    })    
  }

  deleteEnquiry(enquiry: Enquiry) {
    console.log("==>>"+enquiry._id);
    if(confirm("Are you sure to delete?")) {
      this.enquiryService.deleteEnquiry(enquiry._id).subscribe(res => {
        this.enquiryList.splice(this.enquiryList.indexOf(enquiry), 1);
      })
    }
  }

}
