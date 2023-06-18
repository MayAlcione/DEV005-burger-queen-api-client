import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
export class MemberModalComponent {
  adminForm: FormGroup;
  usuarios: Usuario[] = [];
  showModal: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.adminForm = this.formBuilder.group({
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }

  abrirModal() {
    this.showModal = true;
  }

  cerrarModal() {
    this.showModal = false;
  }

  agregarUsuario() {
    if (this.adminForm.valid) {
      const nuevoUsuario: Usuario = {
        id: this.usuarios.length + 1,
        email: this.adminForm.value.correo,
        role: this.adminForm.value.rol
      };
      this.usuarios.push(nuevoUsuario);
      this.adminForm.reset();
      this.cerrarModal();
    }
  }
}
