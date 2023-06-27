import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-waiter-menu',
  templateUrl: './waiter-menu.component.html',
  styleUrls: ['./waiter-menu.component.css']
})
export class WaiterMenuComponent {

  arrayProductInit:Array<Product> = [];
  //Variables declaradas para cambiar el valor boolean del ngIf de su hijo(mostrar u ocultar)
  statusShowBreakfast:boolean;
  statusShowLunch:boolean;

  //Iniciadas en el constructor con valores por defecto
  constructor() {
    this.statusShowBreakfast=true;
    this.statusShowLunch=false;
    //this.arrayProductInit=[];
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
    // console.log('estoy en el', this.arrayProductInit)
    this.arrayProductInit = [...this.arrayProductInit, $event]
  }

}
