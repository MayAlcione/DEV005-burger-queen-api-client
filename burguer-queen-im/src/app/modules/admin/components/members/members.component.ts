import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../../../service/admin.service';

interface Usuario {
  id: number;
  email: string;
  role: string;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  adminForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService) {
    this.adminForm = this.formBuilder.group({
      correo: '',
      contraseña: '',
      rol: ''
    });
  }

  @Input() usuarios: Usuario[] = [];

  ngOnInit() {
  }

  agregarUsuario() {
    const nuevoUsuario: Usuario = {
      id: this.usuarios.length + 1,
      email: this.adminForm.value.correo,
      role: this.adminForm.value.rol
    };
    this.usuarios.push(nuevoUsuario);
    console.log(this.usuarios);
    this.adminForm.reset();
    this.adminService.agregarUsuario(nuevoUsuario.email, '', nuevoUsuario.role).subscribe(
      (response: any) => {
        // Lógica para manejar la respuesta del servicio
      },
      (error: any) => {
        // Lógica para manejar el error del servicio
      }
    );
  }

  edit() {
    // Lógica para editar el miembro
  }

  delet() {
    // Lógica para eliminar el miembro
  }
}
