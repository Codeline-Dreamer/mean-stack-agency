import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, RoutesRecognized } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AboutComponent,
    FormsModule,
    UsersComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Mean Stack Agency';
}
