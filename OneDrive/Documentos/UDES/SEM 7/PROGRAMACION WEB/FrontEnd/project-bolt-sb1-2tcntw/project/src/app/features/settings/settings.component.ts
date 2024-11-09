import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent],
  template: `
    <app-main-layout pageTitle="Settings">
      <div class="card">
        <h2>Settings</h2>
        <p>Settings page content goes here</p>
      </div>
    </app-main-layout>
  `
})
export class SettingsComponent {}