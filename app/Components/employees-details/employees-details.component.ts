import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styles: [
  ]
})
export class EmployeesDetailsComponent implements OnInit {
  id:number;

  constructor(activated:ActivatedRoute) { 
    this.id=activated.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
