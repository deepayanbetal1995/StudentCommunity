import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentdataserviceService {

  constructor() { }


  addStudent(student):any{

    let multiplestudent=[];
   
    if(localStorage.getItem('StudentsData'))
    {
      multiplestudent= JSON.parse(localStorage.getItem('StudentsData'));
      multiplestudent= [student,...multiplestudent];

      
    }
    else{
      multiplestudent=[student];
    }

    localStorage.setItem('StudentsData',JSON.stringify(multiplestudent) );
  }

  getstudentData():any{
    if(localStorage.getItem('StudentsData')!= null)
    {
      console.log(JSON.parse(localStorage.getItem('StudentsData')));
      return JSON.parse(localStorage.getItem('StudentsData'));
    }
  }
}
