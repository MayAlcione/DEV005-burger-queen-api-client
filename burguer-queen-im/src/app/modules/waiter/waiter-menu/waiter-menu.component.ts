import { Component } from '@angular/core';
import { OneOrder } from 'src/app/shared/interfaces/createOrder';

@Component({
  selector: 'app-waiter-menu',
  templateUrl: './waiter-menu.component.html',
  styleUrls: ['./waiter-menu.component.css']
})
export class WaiterMenuComponent {

  arrayProductInit:Array<OneOrder>;
  totalPriceProducts:number;
  //Variables declaradas para cambiar el valor boolean del ngIf de su hijo(mostrar u ocultar)
  statusShowBreakfast:boolean;
  statusShowLunch:boolean;

  //Iniciadas en el constructor con valores por defecto
  constructor() {
    this.statusShowBreakfast=true;
    this.statusShowLunch=false;
    this.arrayProductInit = [];
    this.totalPriceProducts = 0;
  }
  //Función que conecta el valor del ngIf en el renderizado de los productos con el evento click de Desayuno/Almuerzo
  onClickForShowBreakfast($event:boolean) {
    //Con cada click, cada uno tendrá valores booleanos opuestos
    this.statusShowBreakfast = $event
    this.statusShowLunch = !$event
    //Función que conecta el valor del ngIf en el renderizado de los productos con el evento click de Desayuno/Almuerzo
  }
  onClickForShowLunch($event:boolean) {
    this.statusShowBreakfast = !$event
    this.statusShowLunch = $event
  }

  onSendingOrders($event:any) {
    if(this.arrayProductInit.find(e => e.product.id === $event.product.id) === undefined){
      this.arrayProductInit = [...this.arrayProductInit, $event]
    }else{
      this.arrayProductInit.forEach(elem => {
        if(elem.product.id === $event.product.id){
          elem.qty = elem.qty+1
        }
      })
    }
    this.totalPriceProducts = 0;
    this.arrayProductInit.forEach(elem => {
      this.totalPriceProducts += (elem.product.price*elem.qty)
    })
  }
}
