import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string='';
  age:string='';
  @Output() myEvent = new EventEmitter();
  Add()
  {
    let e = [this.name,this.age];
    this.myEvent.emit(e);
    this.name="";
    this.age="";
  }
}
