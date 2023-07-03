import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/interfaces/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.css']
})
export class MemberModalComponent implements OnInit {
  adminForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required]
  });

  users: User[] = [];
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

  getUser() {
    if (this.adminForm.valid) {
      const email = this.adminForm.value.email as string;
      const password = this.adminForm.value.password as string;
      const role = this.adminForm.value.role as string;

      if (email && password && role) {
        const newUser = {
          email: email,
          password: password,
          role: role
        };

        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        this.http.post('http://localhost:8080/users', newUser, { headers }).subscribe(
          (response: any) => {
            const createdUser: User = {
              id: response.id,
              email: response.email,
              role: response.role
            };
            this.users.push(createdUser);
            this.adminForm.reset();
            this.closeModal();
            this.adminService.emitRefreshEvent();
          },
          (error: any) => {
            console.error('Error al crear el usuario:', error);
          }
        );
      }
    }
  }
}
