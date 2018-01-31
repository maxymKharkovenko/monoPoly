import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-field',
  templateUrl: './global-field.component.html',
  styleUrls: ['./global-field.component.css']
})
export class GlobalFieldComponent implements OnInit {
  tiles = [
    {text: 'Start', cols: 2, rows: 1, color: '#b3ffb3'},
    {text: '1', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '2', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/bmw.png'},
    {text: '3', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/ea.png'},
    {text: '4', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/hm.png'},
    {text: '5', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/kia.png'},
    {text: '6', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/lexus.png'},
    {text: '7', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/mazda.png'},
    {text: '8', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/opel.png'},
    {text: '9', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/nivea.png'},
    {text: '10', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/prada.png'},
    {text: 'Prison', cols: 2, rows: 1, color: '#b3ffb3'},

    {text: '40', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: 'Play Field', cols: 10, rows: 10, color: '#b3ffb3', component: 'app-cube'},
    {text: '11', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },

    {text: '39', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '12', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },

    {text: '38', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '13', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },

    {text: '37', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '14', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },

    {text: '36', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '15', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },

    {text: '35', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '15', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },

    {text: '34', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '17', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },

    {text: '33', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '18', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },

    {text: '32', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '19', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },

    {text: '31', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '20', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },



    {text: 'One', cols: 2, rows: 1, color: '#b3ffb3'},
    {text: '30', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '29', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '28', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '27', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '26', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '25', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '24', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '23', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '22', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: '21', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/axe.png' },
    {text: 'Two', cols: 2, rows: 1, color: '#b3ffb3'},
  ];
  constructor() { }

  ngOnInit() {

  }

}
