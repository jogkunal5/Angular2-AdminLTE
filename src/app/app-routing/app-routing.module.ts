import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';

// COURSE
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { CourseComponent } from './../course/course.component';
import { AddCourseComponent } from './../course/add-course/add-course.component';
import { EditCourseComponent } from './../course/edit-course/edit-course.component';
import { ManageCourseComponent } from './../course/manage-course/manage-course.component';

// ENQUIRY
import { AddEnquiryComponent } from './../enquiry/add-enquiry/add-enquiry.component';
import { EditEnquiryComponent } from './../enquiry/edit-enquiry/edit-enquiry.component';
import { ManageEnquiryComponent } from './../enquiry/manage-enquiry/manage-enquiry.component';

// STUDENTS
import { AddStudentComponent } from './../students/add-student/add-student.component';
//import { EditStudentComponent } from './../students/edit-student/edit-student.component';
import { ManageStudentComponent } from './../students/manage-student/manage-student.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      // Course
      { path: '', redirectTo: 'starter', pathMatch: 'full' },
      { path: 'starter', component: StarterComponent },
      { path: 'course', component: CourseComponent },
      { path: 'addcourse', component: AddCourseComponent },
      { path: 'managecourse', component: ManageCourseComponent },
      { path: 'editcourse/:id', component: EditCourseComponent },
      // Enquiry
      { path: 'manageenquiry', component: ManageEnquiryComponent },
      { path: 'addenquiry', component: AddEnquiryComponent },
      { path: 'editenquiry/:id', component: EditEnquiryComponent },

      // Students
      { path: 'managestudents', component: ManageStudentComponent },
      { path: 'addstudent', component: AddStudentComponent },
      { path: 'editstudent/:id', component: AddStudentComponent },
    ],
    { enableTracing: true }
    )
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
