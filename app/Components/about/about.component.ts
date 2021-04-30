import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students:{name:string, age:number}[]=[];

  validation=new FormGroup({
    name:new FormControl("Sara",Validators.required),
    age:new FormControl(null,[Validators.min(18),Validators.max(50)])

  })

  get Name(){
    return this.validation.controls.name.valid;
  }

  get Age(){
    return this.validation.controls.age.valid;
  }


  submit(n,a){
     let student:{name:string,age:number}={name:n,age:a};

     this.students.push(student);

     console.log(this.students);

  }

}
