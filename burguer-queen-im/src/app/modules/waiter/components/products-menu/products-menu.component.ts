import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
// import { arrProducts } from './ejemplos';
import { Product } from 'src/app/shared/interfaces/product';
import { OneOrder } from 'src/app/shared/interfaces/createOrder';
import { GetProductsService } from 'src/app/service/get-products.service';

@Component({
  selector: 'app-products-menu',
  templateUrl: './products-menu.component.html',
  styleUrls: ['./products-menu.component.css']
})
export class ProductsMenuComponent implements OnInit{

  arrProducts:Product[] = []

  ngOnInit() {
    this.getProductsforMenu();
  }

  getProductsforMenu() {
    this.getProductsService.getAllProducts().subscribe({
      next: (data) => {
        this.arrProducts = [...data]
        this.optionBreakfast = this.arrProducts.filter(product => product["type"]==="Desayuno")
        this.optionLunch = this.arrProducts.filter(product => product["type"]==="Almuerzo")
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  //filtrar los que son de tipo desayuno
  optionBreakfast:Product[] = []
  //filtrar los que son de tipo almuerzo
  optionLunch:Product[] = []
  //Variables declaradas para enviarlas a su padre como atributo
  @Input() showBreakfastWithClick:boolean;
  @Input() showLunchWithClick:boolean;

  @Output() sendingOrders: EventEmitter<OneOrder>;
  //Toda variable debe ser inicializada en el constructor
  constructor(private getProductsService: GetProductsService) {
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
  }

}
