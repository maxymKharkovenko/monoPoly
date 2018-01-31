import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {
  numFirst = '';
  numSecond = '';

  constructor() { }

  ngOnInit() {
  }
  update () {
    this.numFirst = 'face' + (Math.floor(Math.random() * 6) + 1);
    this.numSecond = 'face' + (Math.floor(Math.random() * 6) + 1);
  }

}
