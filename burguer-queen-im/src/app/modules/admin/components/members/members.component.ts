import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../service/admin.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

interface User {
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
  @Input() users?: User[];
  adminForm: FormGroup;
  selectedUser: User | null = null;
  showModal: boolean = false;

  constructor(
    private adminService: AdminService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.adminForm = this.formBuilder.group({
      email: '',
      password:'',
      role: ''
    });
  }

  ngOnInit() {
    this.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error: any) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  getUsers() {
    const url = 'http://localhost:8080/users';
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<User[]>(url, { headers });
  }
  
  openEditModal(user: User): void {
    this.selectedUser = user;
    this.adminForm.patchValue(user);
    this.showModal = true;
  }
  edit(): void {
    if (this.selectedUser) {
      const updatedUser = { ...this.selectedUser, ...this.adminForm.value };
      this.adminService.editUser(updatedUser).subscribe(
        () => {
          console.log('Usuario actualizado');
          this.closeModal();
        },
        (error: any) => {
          console.error('Error al actualizar el usuario:', error);
        }
      );
    }
  }
  closeModal(): void {
    this.selectedUser = null;
    this.adminForm.reset();
    this.showModal = false;
  }

  eliminate(user: User): void {
    const url = `http://localhost:8080/users/${user.id}`;
    const token = localStorage.getItem('Token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este usuario?');
    if (confirmDelete) {
      this.http.delete(url, { headers }).subscribe(
        () => {
          console.log('Usuario eliminado');
          alert('Usuario eliminado exitosamente');
        },
        (error: any) => {
          console.error('Error al eliminar el usuario:', error);
          alert('Error al eliminar el usuario. Por favor, inténtalo nuevamente.');
        }
      );
    } else {
      // Acción cancelada por el usuario
      console.log('Eliminación de usuario cancelada');
    }
  } 
}
