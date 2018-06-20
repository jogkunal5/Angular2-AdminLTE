import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module


import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from  './starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';

// COURSE
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { ManageCourseComponent } from './course/manage-course/manage-course.component';

// ENQUIRY
import { AddEnquiryComponent } from './enquiry/add-enquiry/add-enquiry.component';
import { EditEnquiryComponent } from './enquiry/edit-enquiry/edit-enquiry.component';
import { ManageEnquiryComponent } from './enquiry/manage-enquiry/manage-enquiry.component';

// students
import { EnquiryService } from './enquiry/services/enquiry.service';
import { CourseService } from './course/services/course.service';
import { StudentsService } from './students/services/students.service';

import { AddStudentComponent } from './students/add-student/add-student.component';
import { ManageStudentComponent } from './students/manage-student/manage-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    CourseComponent,
    AddCourseComponent,
    EditCourseComponent,
    ManageCourseComponent,
    AddEnquiryComponent,
    EditEnquiryComponent,
    ManageEnquiryComponent,
    AddStudentComponent,
    ManageStudentComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    Ng2SearchPipeModule, //including into imports
    Ng2OrderModule, // importing the sorting package here
    NgxPaginationModule,
    NgbModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [EnquiryService,CourseService,StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
