import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent],
  template: `
    <app-main-layout pageTitle="Profile">
      <div class="card">
        <h2>User Profile</h2>
        <p>Profile page content goes here</p>
      </div>
    </app-main-layout>
  `
})
export class ProfileComponent {}