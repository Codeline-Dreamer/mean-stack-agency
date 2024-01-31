import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <header
        class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap" />
          </svg>
          <span class="fs-4">Simple header</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <a
              routerLink="/"
              class="nav-link"
              routerLinkActive="active"
              aria-current="page"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a routerLink="/providers" class="nav-link">Providers</a>
          </li>
          <li class="nav-item">
            <a routerLink="/about" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a routerLink="/contact" class="nav-link">Contact</a>
          </li>
          <li class="nav-item">
            <a routerLink="/login" class="nav-link">Login</a>
          </li>
        </ul>
      </header>
    </div>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
