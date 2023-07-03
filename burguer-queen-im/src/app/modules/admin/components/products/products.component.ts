import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../service/admin.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products?: Product[];
  adminForm: FormGroup;
  selectedProduct: Product | null = null;
  showModal: boolean = false;

  constructor(
    private adminService: AdminService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.adminForm = this.formBuilder.group({
      id: '',
      name: '',
      price: '',
      image: '',
      type: '',
      dateEntry: '',
    });
  }

  ngOnInit() {
    this.getProducts();

    this.adminService.refresh$.subscribe(() => {
      this.getProducts();
    });
  }

  getProducts() {
    const url = 'http://localhost:8080/products';
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.get<Product[]>(url, { headers }).subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error: any) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  openEditModal(product: Product): void {
    this.selectedProduct = product;
    this.adminForm.patchValue(product);
    this.showModal = true;
  }

  edit(): void {
    if (this.selectedProduct) {
      const updatedProduct = { ...this.selectedProduct, ...this.adminForm.value };
      this.adminService.editProduct(updatedProduct).subscribe(
        () => {
          console.log('Producto actualizado');
          this.closeModal();
        },
        (error: any) => {
          console.error('Error al actualizar el producto:', error);
        }
      );
    }
  }

  closeModal(): void {
    this.selectedProduct = null;
    this.adminForm.reset();
    this.showModal = false;
  }

  eliminate(product: Product): void {
    const url = `http://localhost:8080/products/${product.id}`;
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (confirmDelete) {
      this.http.delete(url, { headers }).subscribe(
        () => {
          console.log('Producto eliminado');
          alert('Producto eliminado exitosamente');
          this.adminService.emitRefreshEvent(); // Emitir el evento de actualización
        },
        (error: any) => {
          console.error('Error al eliminar el producto:', error);
          alert('Error al eliminar el producto. Por favor, inténtalo nuevamente.');
        }
      );
    } else {
      // Acción cancelada por el usuario
      console.log('Eliminación de producto cancelada');
    }
  }
}
