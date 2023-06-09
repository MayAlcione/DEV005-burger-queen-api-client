import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './views/login/login.component';
import { FooterComponent } from './shared/components/footer/footer.component';// <---- Importar FormsModule

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Core Modulo: servicios HTTP para comunicarse con una API, agrupa “componentes” que si y sólo
//   si se van a compartir a través de toda la aplicación pero generando una referencia única.

