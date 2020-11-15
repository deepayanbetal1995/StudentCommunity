import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { StudentadminComponent } from './studentadmin/studentadmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgePipe } from './pipes/age.pipe';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsignupComponent,
    StudentadminComponent,
    AgePipe,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
