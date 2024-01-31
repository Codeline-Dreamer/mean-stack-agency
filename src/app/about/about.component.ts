import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section class="container">
      <p>about works!</p>
    </section>
  `,
  styleUrl: './about.component.css',
})
export class AboutComponent {}
