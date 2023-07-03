import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/shared/interfaces/product';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector:  'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.css']
})
export class ProductsModalComponent implements OnInit {
  adminForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    image: ['', Validators.required],
    type: ['', Validators.required]
  });

  products: Product[] = [];
  showModal = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {}

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  getProduct() {
    if (this.adminForm.valid) {
      const name = this.adminForm.value.name as string;
      const priceValue = this.adminForm.value.price;
      const image = this.adminForm.value.image as string;
      const type = this.adminForm.value.type as string;

      if (name && typeof priceValue === 'number' && image && type) {
        const price = priceValue as number;
        const newProduct = {
          name: name,
          price: price,
          image: image,
          type: type,
        };

        // Configurar los encabezados
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        // Realizar la solicitud POST al backend con los encabezados
        this.http.post('http://localhost:8080/products', newProduct, { headers }).subscribe(
          (response: any) => {
            const createdProduct: Product = {
              id: response.id,
              name: response.name,
              price: response.price,
              image: response.image,
              type: response.type,
              dateEntry: response.dateEntry,
            };
            this.products.push(createdProduct);
            this.adminForm.reset();
            this.closeModal();
            this.adminService.emitRefreshEvent(); // Emitir el evento de actualización
          },
          (error: any) => {
            console.error('Error al crear el producto:', error); 
          }
        );
      }
    }
  }
}

  
        

