import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  studentX = "Student from app comp"
  img = "src/assets/profile.png";
  linksArr = ["HTML","CSS","JS","TS","XAML"]
  Data = [
    { name : "Joey",info : "An Actor lets say"},
    { name : "Chandler",info : "An Actor lets say"},
    { name : "Ross",info : "An Actor lets say"},
    { name : "Monica",info : "An Actor lets say"},
    { name : "Rachel",info : "An Actor lets say"},
    { name : "Phoebe",info : "An Actor lets say"},
    { name : "Green's",info : "An Actor lets say"},
    { name : "Geller's",info : "An Actor lets say"},
    { name : "Bing's",info : "An Actor lets say"},
    { name : "Tribbiani's",info : "An Actor lets say"},
    { name : "Buffay's",info : "An Actor lets say"}
  ]
}
