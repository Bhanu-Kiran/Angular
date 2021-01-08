import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-example',
  templateUrl: './bootstrap-example.component.html',
  styleUrls: ['./bootstrap-example.component.css']
})
export class BootstrapExampleComponent implements OnInit {

  @Input() links;
  constructor() { }

  ngOnInit(): void {
    console.log(this.links);
  }

}
