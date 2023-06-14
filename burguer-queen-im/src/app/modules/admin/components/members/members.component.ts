import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  members: string[] = []; // Lista de miembros

  constructor() {
    this.getMembers();
  }

  getMembers() {
    this.members = ['Miembro 1', 'Miembro 2', 'Miembro 3'];
  }
}
