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
    this.numFirst = 'face' + (Math.floor(Math.random() * 6) + 1);
    this.numSecond = 'face' + (Math.floor(Math.random() * 6) + 1);

    let sum = (this.numFirst + this.numSecond) -1;
    this.start.emit(sum);
  }

}
