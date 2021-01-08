import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stortsman',
  templateUrl: './stortsman.component.html',
  styleUrls: ['./stortsman.component.css']
})
export class StortsmanComponent implements OnInit {

  constructor() { }
  sportsman:string = 'SPORTSMAN';
  ngOnInit(): void {
  }

}
