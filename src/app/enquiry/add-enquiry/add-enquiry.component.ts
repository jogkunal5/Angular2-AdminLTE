import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryService } from '../services/enquiry.service';
import Enquiry from '../models/enquiry.model';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrls: ['./add-enquiry.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AddEnquiryComponent implements OnInit {

  constructor(
    //Private enquiryservice will be injected into the component by Angular Dependency Injector
    private http: Http,
    private router: Router,
    private route: ActivatedRoute, 
    private enquiryService: EnquiryService
  ) { }

  //Declaring the new enquiry Object and initilizing it
  public newEnquiry: Enquiry = new Enquiry()  
  enquiryList: Enquiry[];
  enquiry: any = {};

  //An Empty list for the visible enquiry list
  ngOnInit(): void {
      //At component initialization the 
      this.enquiryService.getInquiries().subscribe(enquiry => {
          //assign the enquirylist property to the proper http response
          this.enquiryList = enquiry
          console.log(enquiry)
      })
  }

  //This method will get called on Create button event
  
  create() {
    this.enquiryService.createEnquiry(this.newEnquiry).subscribe((res) => {
        this.enquiryList.push(res.data)
        this.newEnquiry = new Enquiry()
        alert("Enquiry saved successfully");
      }, err => {        
        alert("Saved unsuccessfull");
      })
  }

}