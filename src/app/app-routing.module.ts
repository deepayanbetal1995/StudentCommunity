import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentadminComponent } from './studentadmin/studentadmin.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';


const routes: Routes = [

  { path : '', component : StudentsignupComponent},
  {
    path:'studentDetails',
    component:StudentDetailsComponent
  },
  {
    path:'admin',
    component:StudentadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
