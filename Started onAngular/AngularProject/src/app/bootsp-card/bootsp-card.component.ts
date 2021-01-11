import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bootsp-card',
  templateUrl: 'bootsp-card.component.html',
  styleUrls: ['./bootsp-card.component.css']
})
export class BootspCardComponent  {

  // img = "src/assets/profile.png";
  @Input() Friends: any;
  @Output() shareMe = new EventEmitter();
  constructor() { }
  showName(data){
    this.shareMe.emit(data);
  }
  ngOnInit()  {
  }

}
