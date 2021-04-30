import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2';
  students:{name:string,age:string}[]=[];
  dd: any[] = [];
  ReceiveData(data:any[])
  {
    this.dd=data;
    let student:{name:string, age:string} = {name:this.dd[0],age:this.dd[1]};
    this.students.push(student);
  }
}
