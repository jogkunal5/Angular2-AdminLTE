import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryService } from '../services/enquiry.service';
import Enquiry from '../models/enquiry.model';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-edit-enquiry',
  templateUrl: './edit-enquiry.component.html',
  styleUrls: ['./edit-enquiry.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class EditEnquiryComponent implements OnInit {

  constructor(
    //Private enquiryservice will be injected into the component by Angular Dependency Injector
    private http: Http,
    private router: Router,
    private route: ActivatedRoute, 
    private enquiryService: EnquiryService
  ) { }

  public newEnquiry: Enquiry = new Enquiry()
  enquiryArr: Enquiry[] = [];
  enquiryList: Enquiry[];
  enquiry: any = {};
  id:string;


  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params['id'];
    })

    this.enquiryService.getInquiries().subscribe(enquiry => {
      //assign the enquirylist property to the proper http response
      this.enquiryList = enquiry
      console.log(enquiry)
    })

    this.enquiryService.getInquiries().subscribe(enquiry => {
      //assign the todolist property to the proper http response
      this.enquiryList = enquiry
      console.log(enquiry);
      for(var i=0; i<this.enquiryList.length; i++){
        if(this.enquiryList[i]._id == this.id){
          this.enquiry = this.enquiryList[i];
          break;
        }
      }
    })

  }

  update(enquiry: Enquiry) { 
    console.log("Edit enquiry==>>>"+enquiry)
    this.enquiryService.updateEnquiry(enquiry).subscribe(res => {
      alert("Enquiry updated successfully");
    }, err => {
      this.update(enquiry)
      alert('Update Unsuccessful');
    })    
  }

}

