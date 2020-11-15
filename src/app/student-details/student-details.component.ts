import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from '../Services/country';
import { Student } from '../Services/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  RegistrationForm : FormGroup;
  datas : Student[];
  dataofStudent : any;

  nameValue: string;
  emailvalue: string;
  dob : string;
  image: string;
  countryValue: Country = new Country(0,'');
  countryName:string;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.RegistrationForm= this.fb.group(
      {
        name: [{ value: '', disabled: false }],
        email:['', [Validators.required,Validators.pattern("[^ @]*@[^ @]*")] ],
        dob: [{ value: '', disabled: false }],
        image:[{ value: '', disabled: false }],
        selectedCountry : [''],
        signupDate:[''] 

      })

    
    
  }

}
