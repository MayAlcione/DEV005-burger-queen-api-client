import { Component, Input, Output, EventEmitter } from '@angular/core';
import { arrProducts } from './ejemplos';
import { Product } from 'src/app/shared/interfaces/product';
import { OneOrder } from 'src/app/shared/interfaces/createOrder';

@Component({
  selector: 'app-products-menu',
  templateUrl: './products-menu.component.html',
  styleUrls: ['./products-menu.component.css']
})
export class ProductsMenuComponent{
  //filtrar los que son de tipo desayuno
  optionBreakfast:Product[] = arrProducts.filter(product => product["type"]==="Desayuno")
  //filtrar los que son de tipo almuerzo
  optionLunch:Product[] = arrProducts.filter(product => product["type"]==="Almuerzo")
  //Variables declaradas para enviarlas a su padre como atributo
  @Input() showBreakfastWithClick:boolean;
  @Input() showLunchWithClick:boolean;

  @Output() sendingOrders: EventEmitter<OneOrder>;
  //Toda variable debe ser inicializada en el constructor
  constructor() {
    //Valor True, para que al inicio solo se renderice la lista del desayuno
    this.showBreakfastWithClick=true;
    //Valor False, para que esté oculto cuando se entra a la seccion menú
    this.showLunchWithClick=false;

    this.sendingOrders = new EventEmitter();
  }

  addProductInOrder(product:Product) {
    const objProduct:OneOrder = {
      qty: 1,
      product: product
    }
    this.sendingOrders.emit(objProduct)
    //console.log('click click', objProduct);

  }
}
