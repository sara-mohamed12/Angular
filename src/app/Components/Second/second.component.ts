import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
 i:number=0;
 src:string="assets/images/10.jpg";
 images:string[]=[
   "assets/images/10.jpg",
   "assets/images/11.jpg",
   "assets/images/12.jpg",
   "assets/images/13.jpg"
 ]
 
 id:any;

 next(){
   if(this.i < this.images.length-1){
     this.i++;
     this.src=this.images[this.i]
   }
 }

 interval(){
    this.i++;
    if(this.i >= this.images.length){
       this.i=0;
    }
    this.src=this.images[this.i]
 }

 prev(){
    if(this.i>0 && this.i<this.images.length){
      this.i--;
      this.src=this.images[this.i]
    } 
  }

  start(){
     this.id = setInterval(() => {
      this.interval(); 
    }, 1500);
  }

  stop(){
    clearInterval(this.id);
  }
}
