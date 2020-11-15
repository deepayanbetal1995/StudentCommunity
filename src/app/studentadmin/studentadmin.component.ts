import { Component, OnInit } from '@angular/core';

import { Student } from '../Services/Student';
import { StudentdataserviceService } from '../Services/studentdataservice.service';

@Component({
  selector: 'app-studentadmin',
  templateUrl: './studentadmin.component.html',
  styleUrls: ['./studentadmin.component.css']
})
export class StudentadminComponent implements OnInit {

  
  datas : Student[];
  nameVal : string;
  emailVal:string;
  dob:string;
  image:string;
  country:string;
  


  constructor(private studentservice : StudentdataserviceService) { }

  ngOnInit() {
    
    this.onCallAdmin();
    
    

  }

  onCallAdmin():any{
    this.datas= this.studentservice.getstudentData();
    
    console.log("from student admin ts");
    //console.log(this.datas);
  }




}
