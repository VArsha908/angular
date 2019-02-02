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
  check ( lang: string)
    {
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
          this.cl.splice(i,1);
        }
        else
        {
          this.cl.push(lang);
        }
      }
  obj = new Employee('','','',null,'','','','','','',[]);

  constructor() { }
  

  ngOnInit() {
    this.exp = [ 'Fresher', '1-2 years', '3-5 years', '6-10 years' ];
    this.qual =[ '10th', '12th', 'Diploma', 'Graduation', 'Post Graduation' ];
    this.coding_languages=['C/C++','Java','C#','PHP','python'];
  }
  OnSubmit ()
{
  console.log(this.obj);
}
}
