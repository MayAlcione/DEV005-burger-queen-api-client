import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/shared/interfaces/product';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-products-modal',
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
    console.log('aquí estoy');
    if (this.adminForm.valid) {
      const name = this.adminForm.value.name as string;
      const priceValue = this.adminForm.value.price;
      const image = this.adminForm.value.image as string;
      const type = this.adminForm.value.type as string;

      console.log('entré al if');
      const price = parseInt(priceValue || '0', 10);
      const newProduct = {
        name: name,
        price: price,
        image: image,
        type: type,
      };

      const token = localStorage.getItem('Token'); // Obtener el token de autenticación

      if (token) {
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${token}`); // Establecer el token en los encabezados

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
        this.http.get<Product[]>('http://localhost:8080/products', { headers }).subscribe(
          (products: Product[]) => {
            this.products = products;
          },
        
          (error: any) => {
            console.error('Error al obtener productos:', error);
          }
        );
        
      } else {
        console.error('Token de autenticación no encontrado');
      }
    }
  }
}
