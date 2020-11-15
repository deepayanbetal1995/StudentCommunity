import { formatDate } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Country } from '../Services/country';
import { CountrydataserviceService } from '../Services/countrydataservice.service';
import { StudentdataserviceService } from '../Services/studentdataservice.service';

@Component({
  selector: 'app-studentsignup',
  templateUrl: './studentsignup.component.html',
  styleUrls: ['./studentsignup.component.css']
})
export class StudentsignupComponent implements OnInit {

  RegistrationForm : FormGroup;
  nameValue: string;
  emailvalue: string;
  dob : string;
  image: string;
  countryValue: Country = new Country(0,'');
  countryName:string;
  countries: Country[];
  student : any = {};
  signupDateVal : string;

  constructor(private fb : FormBuilder,private _dataService: CountrydataserviceService,
    private studentservice : StudentdataserviceService) {
      this.countries= this._dataService.getCountries();
    }

    

  ngOnInit() {
    this.RegistrationForm= this.fb.group(
      {
        name: [{ value: '', disabled: false }],
        email:['', [Validators.required, Validators.email,Validators.pattern("[^ @]*@[^ @]*")] ],
        dob: [{ value: '', disabled: false }],
        image:[{ value: '', disabled: false }],
        selectedCountry : [''],
        signupDate:[''] 

      }
    )
    

  }

  getnamemathod():any{

    
    console.log("in get name");
    this.nameValue = this.RegistrationForm.get('name').value;
    this.emailvalue= this.RegistrationForm.get('email').value;
    this.dob = this.RegistrationForm.get('dob').value;
    this.image=this.RegistrationForm.get('image').value;
    this.countryValue=this.RegistrationForm.get('selectedCountry').value;
    console.log(this.nameValue);
            
  }

  onSubmit(){

    let currentDate = new Date();
    let cVAlue = formatDate(currentDate,'yyyy-MM-dd','en-US');
    this.RegistrationForm.patchValue({
      signupDate: cVAlue
    })
    console.log(this.RegistrationForm.value);
    this.student= Object.assign(this.student, this.RegistrationForm.value);
    console.log(this.student); 
    this.studentservice.addStudent(this.student);
    this.RegistrationForm.reset();
    console.log('view');
    console.log(JSON.parse(localStorage.getItem('StudentsData')));
  }

 

  

  

  
}


