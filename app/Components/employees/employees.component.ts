import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit {

  age;
  name;
  students:{name:string, age:number}[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  Add(){
    let student:{name:string,age:number}={name:this.name,age:this.age};
    this.students.push(student); 
    this.age="";
    this.name="";
   }

  get AgeValid(){
    return !this.age
  }

}