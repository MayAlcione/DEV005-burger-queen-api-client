import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AdminService } from '../../../../service/admin.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, OnDestroy {
  @Input() users?: User[];
  adminForm: FormGroup;
  selectedUser: User | null = null;
  showModal: boolean = false;
  private refreshSubscription: Subscription | undefined;

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
    this.getUsers();

    this.refreshSubscription = this.adminService.refresh$.subscribe(() => {
      this.getUsers();
    });
  }

  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  getUsers() {
    const url = 'http://localhost:8080/users';
    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.get<User[]>(url, { headers }).subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error: any) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
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

  deleteUser(user: User): void {
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
          this.getUsers();
          alert('Usuario eliminado exitosamente');
        },
        (error: any) => {
          console.error('Error al eliminar el usuario:', error);
          alert('Error al eliminar el usuario. Por favor, inténtalo nuevamente.');
        }
      );
    } else {
      console.log('Eliminación de usuario cancelada');
    }
  }
}

