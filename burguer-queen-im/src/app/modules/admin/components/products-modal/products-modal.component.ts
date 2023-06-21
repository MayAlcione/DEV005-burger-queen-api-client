import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.css']
})
export class ProductsModalComponent {
  showModal = false;
  adminForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl(''),
    type: new FormControl('')
  });
  products: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {}

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.adminForm.reset(); // Restablecer los valores del formulario
  }

  addProduct() {
    const { name, price, image, type } = this.adminForm.value;

    // Llamar al servicio para agregar el producto
    this.adminService.addProduct(name, price, image, type)
      .subscribe(
        (response: any) => {
          // Manejar la respuesta exitosa
          console.log('Producto agregado:', response);
          // Agregar el producto a la lista de productos
          this.products.push(response);
          // Cerrar el modal y restablecer el formulario
          this.closeModal();
        },
        (error: any) => {
          // Manejar el error
          console.error('Error al agregar el producto:', error);
        }
      );
  }
}

