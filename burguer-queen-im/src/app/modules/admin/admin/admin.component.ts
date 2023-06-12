import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showModal = false;
  adminForm: FormGroup = new FormGroup({
    correo: new FormControl(''),
    contraseña: new FormControl(''),
    rol: new FormControl('')
  });
  usuarios: any[] = [];

  constructor(private adminService: AdminService, private authService: AuthService) { }

  ngOnInit() {
    // Verificar si el usuario está autenticado
    if (this.authService.isAuthenticated()) {
      // Usuario autenticado, llamar al método para obtener los usuarios
      this.obtenerUsuarios();
    } else {
      // Usuario no autenticado, realizar el proceso de autenticación
      const email = 'correo@example.com';
      const password = 'contraseña';
      const role = 'rol';
  
      this.authService.admin(email, password, role);
  
      // Esperar un tiempo para que la solicitud de autenticación se complete
      setTimeout(() => {
        if (this.authService.isAuthenticated()) {
          // Usuario autenticado, llamar al método para obtener los usuarios
          this.obtenerUsuarios();
        } else {
          console.log('Error de autenticación');
        }
      }, 2000); // Ajusta el tiempo según sea necesario
    }
  }
  
  abrirModal() {
    this.showModal = true;
  }

  cerrarModal() {
    this.showModal = false;
    this.adminForm.reset(); // Restablecer los valores del formulario
  }
  
  agregarUsuario() {
    const { correo, contraseña, rol } = this.adminForm.value;
  
    // Llamar al servicio para agregar el usuario
    this.adminService.agregarUsuario(correo, contraseña, rol)
      .subscribe(
        (response: any) => {
          // Manejar la respuesta exitosa
          console.log('Usuario agregado:', response);
          // Agregar el usuario a la lista de usuarios
          this.usuarios.push(response);
          // Cerrar el modal y restablecer el formulario
          this.cerrarModal();
        },
        (error: any) => {
          // Manejar el error
          console.error('Error al agregar el usuario:', error);
        }
      );
  }
  
  obtenerUsuarios() {
    this.adminService.obtenerUsuarios()
      .subscribe(
        (response: any) => {
          // Manejar la respuesta exitosa
          this.usuarios = response;
          console.log('Usuarios obtenidos:', response);
        },
        (error: any) => {
          // Manejar el error
          if (error.status === 401) {
            console.error('No se encontró la cabecera de autenticación');
          } else if (error.status === 403) {
            console.error('Token de autenticación inválido');
          } else {
            console.error('Error en la solicitud:', error);
          }
        }
      );
  }
}  