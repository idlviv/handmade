import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  block: any;

  constructor() {
    this.block = [
      {
        name: 'one',
        content: 'text1',
        visible: true,
        show: true,
      }
    ]
  }

  ngOnInit() {
  }

}
