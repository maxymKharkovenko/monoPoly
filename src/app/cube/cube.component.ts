import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css'],

})
export class CubeComponent implements OnInit {
  @Input('on-start') onStart: any;
  numFirst = '';
  numSecond = '';

  constructor() { }

  ngOnInit() {
  }
  start () {
    this.onStart();
  }
  update () {
    this.numFirst = 'face' + (Math.floor(Math.random() * 6) + 1);
    this.numSecond = 'face' + (Math.floor(Math.random() * 6) + 1);

    let sum = (this.numFirst + this.numSecond) -1;
    this.onStart(sum);
  }

}
