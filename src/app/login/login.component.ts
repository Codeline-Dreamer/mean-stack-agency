import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  template: `
    <section class="container">
      <p>login works!</p>
      <div class="row">
        <div class="col">
          <div ngbDropdown class="d-inline-block">
            <button
              type="button"
              class="btn btn-outline-primary"
              id="dropdownBasic1"
              ngbDropdownToggle
            >
              Toggle dropdowns
            </button>
            <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
              <button ngbDropdownItem>Action - 1</button>
              <button ngbDropdownItem>Another Action</button>
              <button ngbDropdownItem>Something else is here</button>
            </div>
          </div>
        </div>

        <div class="col text-end">
          <div ngbDropdown placement="top-end" class="d-inline-block">
            <button
              type="button"
              class="btn btn-outline-primary"
              id="dropdownBasic2"
              ngbDropdownToggle
            >
              Toggle dropup
            </button>
            <div ngbDropdownMenu aria-labelledby="dropdownBasic2">
              <button ngbDropdownItem>Action - 1</button>
              <button ngbDropdownItem>Another Action</button>
              <button ngbDropdownItem>Something else is here</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './login.component.css',
})
export class LoginComponent {}
