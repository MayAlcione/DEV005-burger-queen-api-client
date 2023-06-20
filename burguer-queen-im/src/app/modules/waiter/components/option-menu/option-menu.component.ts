import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.css']
})
export class OptionMenuComponent {

  //Por defecto al cargar la página, Desayuno debe tener la clase activa
  statusBreakfast={
    'navOptionMenuActive':true
  }
  //Por defecto al cargar la página, Almuerzo debe tener la clase inactiva
  statusLunch={
    'navOptionMenuActive':false
  }
  //Emitir un evento al padre con respuesta boolean para aplicar distinto evento a cada sección
  @Output() clickForShowBreakfast: EventEmitter<boolean>;
  @Output() clickForShowLunch: EventEmitter<boolean>;
  //toda variable declarada, debe ser iniciada en el constructor
  constructor() {
    this.clickForShowBreakfast = new EventEmitter();
    this.clickForShowLunch = new EventEmitter();
  }
  //Función que se ejecuta al dar click en Desayuno
  breakfast() {
    //Click y la clase se activa en Desayuno
    this.statusBreakfast['navOptionMenuActive']=true;
    //clase que se desactiva en Almuerzo
    this.statusLunch['navOptionMenuActive']=false;
    //Click y se emite la respuesta a ambos eventos, para renderizar productos del desayuno filtrados
    this.clickForShowBreakfast.emit(true)
    //ocultar los productos del almuerzo cena
    this.clickForShowLunch.emit(false)
  }
  //Función que se ejecuta al dar click en Almuerzo y cena
  lunch(){
    this.statusBreakfast['navOptionMenuActive']=false;
    this.statusLunch['navOptionMenuActive']=true;
    this.clickForShowLunch.emit(true)
    this.clickForShowBreakfast.emit(false)
  }


}
