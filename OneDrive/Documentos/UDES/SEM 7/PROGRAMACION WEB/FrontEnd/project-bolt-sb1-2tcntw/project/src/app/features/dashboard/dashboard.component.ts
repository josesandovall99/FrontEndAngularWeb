import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MainLayoutComponent],
  template: `
    <app-main-layout pageTitle="ADMINISTRADOR">
      <div class="dashboard-grid">
        <div class="card">
          <div class="icon">👨‍🎓</div>
          <div class="stat-value">298</div>
          <div class="stat-label">Gestionar Alumnos</div>
        </div>
        
        <div class="card">
          <div class="icon">📚</div>
          <div class="stat-value">56</div>
          <div class="stat-label">Gestionar Asignaturas</div>
        </div>
        
        <div class="card">
          <div class="icon">🎯</div>
          <div class="stat-value">41</div>
          <div class="stat-label">Gestionar Curso</div>
        </div>

        <div class="card">
          <div class="icon">💰</div>
          <div class="stat-value">01</div>
          <div class="stat-label">Gestionar Pensum</div>
        </div>

        <div class="card">
          <div class="icon">❓</div>
          <div class="stat-value">01</div>
          <div class="stat-label">Gestionar Solicitudes</div>
        </div>

        <div class="card">
          <div class="icon">👩‍🏫</div>
          <div class="stat-value">43</div>
          <div class="stat-label">Gestionar Docentes</div>
        </div>
      </div>
    </app-main-layout>
  `,
  styles: [`
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }

    .icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .card {
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .card:nth-child(1) { border-top: 4px solid #2196f3; }
    .card:nth-child(2) { border-top: 4px solid #4caf50; }
    .card:nth-child(3) { border-top: 4px solid #f44336; }
    .card:nth-child(4) { border-top: 4px solid #ffd700; }
    .card:nth-child(5) { border-top: 4px solid #4caf50; }
    .card:nth-child(6) { border-top: 4px solid #ff69b4; }
  `]
})
export class DashboardComponent {}