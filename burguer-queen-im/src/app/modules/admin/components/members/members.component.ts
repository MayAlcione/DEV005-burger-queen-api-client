import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../service/admin.service';
import { HttpClient } from '@angular/common/http'; // Importa el servicio HttpClient

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
  @Input() usuarios: Usuario[] = []; // Agrega la entrada "usuarios"

  constructor(private adminService: AdminService, private http: HttpClient) {}

  ngOnInit() {
    const uid = 'anita.borg@systers.xyz'; // ID o email del usuario que deseas obtener

    this.getUser(uid).subscribe(
      (usuario: Usuario) => {
        this.usuarios.push(usuario); // Agrega el usuario obtenido a la lista de usuarios
      },
      (error: any) => {
        // Manejar el error de la solicitud
      }
    );
  }

  getUser(uid: string) {
    const url = `/users/${uid}`; // URL de la solicitud GET
    return this.http.get<Usuario>(url);
  }
}
