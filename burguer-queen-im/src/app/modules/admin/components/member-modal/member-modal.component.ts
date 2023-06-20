import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Usuario {
  id: number;
  email: string;
  role: string;
}

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.css']
})
export class MemberModalComponent implements OnInit {
  adminForm = this.formBuilder.group({
    correo: ['', Validators.required],
    contraseña: ['', Validators.required],
    rol: ['', Validators.required]
  });

  usuarios: Usuario[] = [];
  showModal = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
  
  }

  abrirModal() {
    this.showModal = true;
  }

  cerrarModal() {
    this.showModal = false;
  }
  
agregarUsuario() {
  if (this.adminForm.valid) {
    const correo = this.adminForm.value.correo as string;
    const contraseña = this.adminForm.value.contraseña as string;
    const rol = this.adminForm.value.rol as string;

    if (correo && contraseña && rol) {
      const newUser = {
        email: correo,
        password: contraseña,
        role: rol
      };

      // Configurar los encabezados
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      // Realizar la solicitud POST al backend con los encabezados
      this.http.post('http://localhost:8080/users', newUser, { headers }).subscribe(
        (response: any) => {
          const createdUser: Usuario = {
            id: response.id,
            email: response.email,
            role: response.role
          };
          this.usuarios.push(createdUser);
          this.adminForm.reset();
          this.cerrarModal();
        },
        (error: any) => {
          // Manejar el error de la solicitud
        }
      );
    }
  }
}
}
