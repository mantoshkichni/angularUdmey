import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})

export class TimerComponent {
submitForm(event:Event) {
  console.log(event)
throw new Error('Method not implemented.');
}

  name:string="";
  subject:string="";
  description:string="";

 public myData=[
  {
  id:1,
  name:"Mantosh",
  subject:"Math",
  Description:"Math is good Subject"

},
{
  id:2,
  name:"Mantosh",
  subject:"Math",
  Description:"Math is good Subject"
},
{
  id:3,
  name:"Mantosh",
  subject:"Math",
  Description:"Math is good Subject"
},
{
  id:4,
  name:"Mantosh",
  subject:"Math",
  Description:"Math is good Subject"
},
{
  id:5,
  name:"Mantosh",
  subject:"Math",
  Description:"Math is good Subject"
},


]

}
