import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css'],

})
export class CubeComponent implements OnInit {
  @Output() start = new EventEmitter<number>();
  numFirst = '';
  numSecond = '';

  constructor() { }

  ngOnInit() {
  }
  onStart () {
    this.start.emit(0);
  }
  update () {
    const f = (Math.floor(Math.random() * 6) + 1);
    const s = (Math.floor(Math.random() * 6) + 1);
    this.numFirst = 'face' + f;
    this.numSecond = 'face' + s;

    const sum = (f + s) - 1;
    this.start.emit(sum);
  }

}
