import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="container">
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold">Home Page</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            This is a simple web application designed to explore the routes in
            ANgular. Developed using Angular CLI, a powerful command-line
            interface tool for Angular, the app offers a seamless, responsive,
            and interactive user experience. Angular CLI streamlines the
            development process by handling the initial project setup,
            scaffolding, and various development tasks, allowing for a robust
            and well-structured application architecture.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Secondary
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
