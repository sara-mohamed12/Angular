import { Component } from '@angular/core';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
  })

export class FirstComponent{
  fname:string="";
  default:string="Default Value"

  change(){
      this.fname=this.default;
  }
}