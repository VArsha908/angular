import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  exp: string[];
  qual: string[];
  coding_languages: string[];
  cl=[];
  obj = [];

  constructor() { }
  

  ngOnInit() {
    this.exp = [ 'Fresher', '1-2 years', '3-5 years', '6-10 years' ];
    this.qual =[ '10th', '12th', 'Diploma', 'Graduation', 'Post Graduation' ];
    this.coding_languages=['C/C++','Java','C#','PHP','python'];
    this.cl = this.coding_languages;
  }

  check (lang:string, event)
    {
      if(event.target.checked){
      for(var i=0;i<5;i++)
      {
        var marker=0;
        if (this.cl[i] == lang)
        {
          marker=1;
          break;
        }
      }
      if(marker==1)
        {
          this.obj.push(lang);
        }
      }
      else{
        var index = this.obj.indexOf(lang);
        if(index != -1)
          this.obj.splice(index,1);
      }
      }

  OnSubmit ()
{
  console.log(this.obj);
}
}
