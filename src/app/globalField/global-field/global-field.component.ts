import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-field',
  templateUrl: './global-field.component.html',
  styleUrls: ['./global-field.component.css']
})
export class GlobalFieldComponent implements OnInit {
  tiles = [
    {text: 'Start', cols: 2, rows: 1, color: 'red'},
    {text: '1', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '2', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '3', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '4', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '5', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '6', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '7', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '8', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '9', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '10', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Prison', cols: 2, rows: 1, color: 'red'},

    {text: '40', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Play Field', cols: 10, rows: 10, color: 'red'},
    {text: '11', cols: 2, rows: 1, color: 'lightgreen'},

    {text: '39', cols: 2, rows: 1, color: 'lightgreen'},
    {text: '12', cols: 2, rows: 1, color: 'lightgreen'},

    {text: '38', cols: 2, rows: 1, color: 'lightgreen'},
    {text: '13', cols: 2, rows: 1, color: 'lightgreen'},

    {text: '37', cols: 2, rows: 1, color: 'lightgreen'},
    {text: '14', cols: 2, rows: 1, color: 'lightgreen'},

    {text: '36', cols: 2, rows: 1, color: 'lightgreen'},
    {text: '15', cols: 2, rows: 1, color: 'lightgreen'},

    {text: '35', cols: 2, rows: 1, color: 'lightgreen'},
    {text: '15', cols: 2, rows: 1, color: 'lightgreen'},

    {text: '34', cols: 2, rows: 1, color: 'lightgreen'},
    {text: '17', cols: 2, rows: 1, color: 'lightgreen'},

    {text: '33', cols: 2, rows: 1, color: 'lightgreen'},
    {text: '18', cols: 2, rows: 1, color: 'lightgreen'},

    {text: '32', cols: 2, rows: 1, color: 'lightgreen'},
    {text: '19', cols: 2, rows: 1, color: 'lightgreen'},

    {text: '31', cols: 2, rows: 1, color: 'lightgreen'},
    {text: '20', cols: 2, rows: 1, color: 'lightgreen'},



    {text: 'One', cols: 2, rows: 1, color: 'red'},
    {text: '30', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '29', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '28', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '27', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '26', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '25', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '24', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '23', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '22', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '21', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Two', cols: 2, rows: 1, color: 'red'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
