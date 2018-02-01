import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-field',
  templateUrl: './global-field.component.html',
  styleUrls: ['./global-field.component.css']
})
export class GlobalFieldComponent implements OnInit {
  tiles = [
    {text: 'Start', cols: 2, rows: 1, color: '#b3ffb3', src: '../../assets/icons/start.png'},

    //cosmetics
    {text: '1', cols: 1, rows: 1, color: '#FF8C8C', src: '../../assets/icons/cosmetics/axe.png' },
    {text: '3', cols: 1, rows: 1, color: '#F8F9FA', src: '../../assets/icons/question.png'},
    {text: '2', cols: 1, rows: 1, color: '#FF8C8C', src: '../../assets/icons/cosmetics/nivea.png'},

    {text: '5', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/train.png'},
    {text: '5', cols: 1, rows: 1, color: '#ADA4E4', src: '../../assets/icons/cars/lexus.png'},

    //clothes
    {text: '6', cols: 1, rows: 1, color: '#FFFF8C', src: '../../assets/icons/clothes/diesel.png'},
    {text: '7', cols: 1, rows: 1, color: '#F8F9FA', src: '../../assets/icons/question.png'},
    {text: '8', cols: 1, rows: 1, color: '#FFFF8C', src: '../../assets/icons/clothes/nike.png'},
    {text: '9', cols: 1, rows: 1, color: '#FFFF8C', src: '../../assets/icons/clothes/gucci.png'},


    {text: 'Prison', cols: 2, rows: 1, color: '#b3ffb3', src: '../../assets/icons/prison.png' },

    {text: '40', cols: 2, rows: 1, color: '#FFBA66', src: '../../assets/icons/mobile/motorola.png' },
    {text: 'Play Field', cols: 9, rows: 9, color: '#b3ffb3', component: 'app-cube'},
    {text: '11', cols: 2, rows: 1, color: '#BEFE80', src: '../../assets/icons/services/viber.png' },

    {text: '39', cols: 2, rows: 1, color: '#F8F9FA', src: '../../assets/icons/question.png' },
    {text: '12', cols: 2, rows: 1, color: '#BBC4CC', src: '../../assets/icons/games/ea.png' },

    {text: '38', cols: 2, rows: 1, color: '#FFBA66', src: '../../assets/icons/mobile/siemens.png' },
    {text: '13', cols: 2, rows: 1, color: '#BEFE80', src: '../../assets/icons/services/telegram.png' },


    {text: '37', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/coffee.png' },
    {text: '14', cols: 2, rows: 1, color: '#BEFE80', src: '../../assets/icons/services/fb.png' },

    {text: '36', cols: 2, rows: 1, color: '#ADA4E4', src: '../../assets/icons/cars/skoda.png' },
    {text: '15', cols: 2, rows: 1, color: '#ADA4E4', src: '../../assets/icons/cars/mazda.png' },


    {text: '35', cols: 2, rows: 1, color: '#90D8D4', src: '../../assets/icons/hotels/hilton.png' },
    {text: '16', cols: 2, rows: 1, color: '#6DB7FF', src: '../../assets/icons/potables/cocaCola.png' },

    {text: '34', cols: 2, rows: 1, color: '#F8F9FA', src: '../../assets/icons/question.png' },
    {text: '17', cols: 2, rows: 1, color: '#F8F9FA', src: '../../assets/icons/question.png' },

    {text: '33', cols: 2, rows: 1, color: '#90D8D4', src: '../../assets/icons/hotels/intercontinental.png' },
    {text: '18', cols: 2, rows: 1, color: '#6DB7FF', src: '../../assets/icons/potables/tropicana.png' },

    {text: '32', cols: 2, rows: 1, color: '#90D8D4', src: '../../assets/icons/hotels/delta.png' },
    {text: '19', cols: 2, rows: 1, color: '#6DB7FF', src: '../../assets/icons/potables/schweppes.png' },

    {text: 'One', cols: 2, rows: 1, color: '#b3ffb3', src: '../../assets/icons/police.png' },
    {text: '30', cols: 1, rows: 1, color: '#CC98E6', src: '../../assets/icons/food/burgerKing.png' },
    {text: '29', cols: 1, rows: 1, color: '#BBC4CC', src: '../../assets/icons/games/konami.png' },
    {text: '28', cols: 1, rows: 1, color: '#CC98E6', src: '../../assets/icons/food/kfc.png' },
    {text: '27', cols: 1, rows: 1, color: '#CC98E6', src: '../../assets/icons/food/mc.png' },
    {text: '26', cols: 1, rows: 1, color: '#ADA4E4', src: '../../assets/icons/cars/opel.png' },
    {text: '25', cols: 1, rows: 1, color: '#DD8E56', src: '../../assets/icons/avia/airAsia.png' },
    {text: '24', cols: 1, rows: 1, color: '#DD8E56', src: '../../assets/icons/avia/britishAir.png' },
    {text: '23', cols: 1, rows: 1, color: '#F8F9FA', src: '../../assets/icons/question.png' },
    {text: '22', cols: 1, rows: 1, color: '#DD8E56', src: '../../assets/icons/avia/lufthansa.png' },
    {text: 'Two', cols: 2, rows: 1, color: '#b3ffb3', src: '../../assets/icons/gun.png' },
  ];
  constructor() { }

  ngOnInit() {

  }

}
