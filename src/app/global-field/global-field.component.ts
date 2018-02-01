import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-field',
  templateUrl: './global-field.component.html',
  styleUrls: ['./global-field.component.css']
})
export class GlobalFieldComponent implements OnInit {
  tiles = [
    {id: '0', cols: 2, rows: 1, color: '#b3ffb3', src: '../../assets/icons/start.png'},

    //cosmetics
    {id: '1', cols: 1, rows: 1, color: '#FF8C8C', src: '../../assets/icons/cosmetics/axe.png' },
    {id: '2', cols: 1, rows: 1, color: '#F8F9FA', src: '../../assets/icons/question.png'},
    {id: '3', cols: 1, rows: 1, color: '#FF8C8C', src: '../../assets/icons/cosmetics/nivea.png'},

    {id: '4', cols: 1, rows: 1, color: 'lightgreen', src: '../../assets/icons/train.png'},
    {id: '5', cols: 1, rows: 1, color: '#ADA4E4', src: '../../assets/icons/cars/lexus.png'},

    //clothes
    {id: '6', cols: 1, rows: 1, color: '#FFFF8C', src: '../../assets/icons/clothes/diesel.png'},
    {id: '7', cols: 1, rows: 1, color: '#F8F9FA', src: '../../assets/icons/question.png'},
    {id: '8', cols: 1, rows: 1, color: '#FFFF8C', src: '../../assets/icons/clothes/nike.png'},
    {id: '9', cols: 1, rows: 1, color: '#FFFF8C', src: '../../assets/icons/clothes/gucci.png'},


    {id: '10', cols: 2, rows: 1, color: '#b3ffb3', src: '../../assets/icons/prison.png' },

    {id: '39', cols: 2, rows: 1, color: '#FFBA66', src: '../../assets/icons/mobile/motorola.png' },
    {id: 'Play Field', cols: 9, rows: 9, color: '#b3ffb3', component: 'app-cube'},
    {id: '11', cols: 2, rows: 1, color: '#BEFE80', src: '../../assets/icons/services/viber.png' },

    {id: '38', cols: 2, rows: 1, color: '#F8F9FA', src: '../../assets/icons/question.png' },
    {id: '12', cols: 2, rows: 1, color: '#BBC4CC', src: '../../assets/icons/games/ea.png' },

    {id: '37', cols: 2, rows: 1, color: '#FFBA66', src: '../../assets/icons/mobile/siemens.png' },
    {id: '13', cols: 2, rows: 1, color: '#BEFE80', src: '../../assets/icons/services/telegram.png' },


    {id: '36', cols: 2, rows: 1, color: 'lightgreen', src: '../../assets/icons/coffee.png' },
    {id: '14', cols: 2, rows: 1, color: '#BEFE80', src: '../../assets/icons/services/fb.png' },

    {id: '35', cols: 2, rows: 1, color: '#ADA4E4', src: '../../assets/icons/cars/skoda.png' },
    {id: '15', cols: 2, rows: 1, color: '#ADA4E4', src: '../../assets/icons/cars/mazda.png' },


    {id: '34', cols: 2, rows: 1, color: '#90D8D4', src: '../../assets/icons/hotels/hilton.png' },
    {id: '16', cols: 2, rows: 1, color: '#6DB7FF', src: '../../assets/icons/potables/cocaCola.png' },

    {id: '33', cols: 2, rows: 1, color: '#F8F9FA', src: '../../assets/icons/question.png' },
    {id: '17', cols: 2, rows: 1, color: '#F8F9FA', src: '../../assets/icons/question.png' },

    {id: '32', cols: 2, rows: 1, color: '#90D8D4', src: '../../assets/icons/hotels/intercontinental.png' },
    {id: '18', cols: 2, rows: 1, color: '#6DB7FF', src: '../../assets/icons/potables/tropicana.png' },

    {id: '31', cols: 2, rows: 1, color: '#90D8D4', src: '../../assets/icons/hotels/delta.png' },
    {id: '19', cols: 2, rows: 1, color: '#6DB7FF', src: '../../assets/icons/potables/schweppes.png' },

    {id: '30', cols: 2, rows: 1, color: '#b3ffb3', src: '../../assets/icons/police.png' },
    {id: '29', cols: 1, rows: 1, color: '#CC98E6', src: '../../assets/icons/food/burgerKing.png' },
    {id: '28', cols: 1, rows: 1, color: '#BBC4CC', src: '../../assets/icons/games/konami.png' },
    {id: '27', cols: 1, rows: 1, color: '#CC98E6', src: '../../assets/icons/food/kfc.png' },
    {id: '26', cols: 1, rows: 1, color: '#CC98E6', src: '../../assets/icons/food/mc.png' },
    {id: '25', cols: 1, rows: 1, color: '#ADA4E4', src: '../../assets/icons/cars/opel.png' },
    {id: '24', cols: 1, rows: 1, color: '#DD8E56', src: '../../assets/icons/avia/airAsia.png' },
    {id: '23', cols: 1, rows: 1, color: '#DD8E56', src: '../../assets/icons/avia/britishAir.png' },
    {id: '22', cols: 1, rows: 1, color: '#F8F9FA', src: '../../assets/icons/question.png' },
    {id: '21', cols: 1, rows: 1, color: '#DD8E56', src: '../../assets/icons/avia/lufthansa.png' },
    {id: '20', cols: 2, rows: 1, color: '#b3ffb3', src: '../../assets/icons/gun.png' },
  ];
  constructor() { }

  ngOnInit() {

  }
  startPlay (id: number) {
    console.log(this.tiles);
    let theThing = document.querySelector("#thing");
    let container = document.querySelector(".play-field");

    container.addEventListener("click", (event) => {
      let xPosition = event.clientX - container.getBoundingClientRect().left - (theThing.clientWidth / 2);
      let yPosition = event.clientY - container.getBoundingClientRect().top - (theThing.clientHeight / 2);
      theThing.style.left = xPosition + "px";
      theThing.style.top = yPosition + "px";
    });
  }


}
