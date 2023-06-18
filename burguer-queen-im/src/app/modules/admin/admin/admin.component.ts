import { Component } from '@angular/core';

interface Usuario {
  id: number;
  email: string;
  role: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  listaUsuarios: Usuario[] = [
    { id: 1, email: 'usuario1@example.com', role: 'admin' },
    { id: 2, email: 'usuario2@example.com', role: 'user' },
    { id: 3, email: 'usuario3@example.com', role: 'user' }
  ];
}
