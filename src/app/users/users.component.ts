import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegisterComponent],
  template: `
    <p>users works!</p>
    <app-login></app-login>
    <app-register></app-register>
  `,
  styleUrl: './users.component.css',
})
export class UsersComponent {}
