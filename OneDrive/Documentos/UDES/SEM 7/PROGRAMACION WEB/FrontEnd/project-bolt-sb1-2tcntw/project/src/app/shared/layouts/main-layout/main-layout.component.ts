import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService, User } from '../../../core/services/auth.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="layout">
      <aside class="sidebar">
        <div class="sidebar-header">
          <h3>Geminis APP</h3>
        </div>

        <div class="user-profile">
          <img src="https://via.placeholder.com/40" alt="Profile" class="profile-image">
          <div class="user-info">
            <div class="user-name">{{ user?.name }}</div>
            <div class="user-role">Admin: {{ user?.email }}</div>
          </div>
          <button class="menu-dots">⋮</button>
        </div>

        <nav class="sidebar-nav">
          <a routerLink="/dashboard" routerLinkActive="active" class="nav-item">
            <span class="icon">📊</span>
            Dashboard
          </a>
          <a routerLink="/principal" routerLinkActive="active" class="nav-item">
            <span class="icon">📚</span>
            Principal
          </a>
          <div class="sub-menu">
            <a routerLink="/alumnos" class="nav-item">Gestionar Alumnos</a>
            <a routerLink="/asignaturas" class="nav-item">Gestionar Asignaturas</a>
          </div>
          <a routerLink="/reportes" routerLinkActive="active" class="nav-item">
            <span class="icon">📈</span>
            Reportes
          </a>
          <a routerLink="/configuracion" routerLinkActive="active" class="nav-item">
            <span class="icon">⚙️</span>
            Configuración
          </a>
          <a routerLink="/contactos" routerLinkActive="active" class="nav-item">
            <span class="icon">👥</span>
            Administrador contactos
          </a>
          <a routerLink="/notificaciones" routerLinkActive="active" class="nav-item">
            <span class="icon">🔔</span>
            Notificaciones
            <span class="notification-badge">01</span>
          </a>
          <a routerLink="/chat" routerLinkActive="active" class="nav-item">
            <span class="icon">💬</span>
            Chat con visitantes
          </a>
        </nav>

        <div class="sidebar-footer">
          <a routerLink="/app-config" class="nav-item">
            <span class="icon">⚙️</span>
            Configuración aplicación
          </a>
          <a routerLink="/social" class="nav-item">
            <span class="icon">🌐</span>
            Redes sociales
          </a>
        </div>
      </aside>

      <div class="main-content">
        <header class="header">
          <div class="search-bar">
            <input type="text" placeholder="Busca por categoria...">
            <button>🔍</button>
          </div>
          <div class="header-actions">
            <button class="language-selector">
              🌐 Español (ESP)
            </button>
            <div class="user-welcome">
              Buenos tardes
              <div class="current-time">{{ currentDate | date:'shortTime' }}</div>
            </div>
          </div>
        </header>

        <main class="content">
          <h1 class="page-title">{{ pageTitle }}</h1>
          <p class="page-subtitle">Bienvenido a la seccion principal</p>
          <ng-content></ng-content>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .layout {
      display: flex;
      min-height: 100vh;
    }

    .sidebar {
      width: 280px;
      background-color: var(--sidebar-bg);
      color: white;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      position: fixed;
      height: 100vh;
      overflow-y: auto;
    }

    .sidebar-header {
      padding: 1rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 1.5rem;
    }

    .sidebar-header h3 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      margin-bottom: 1.5rem;
    }

    .profile-image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .user-info {
      flex: 1;
    }

    .user-name {
      font-weight: 500;
    }

    .user-role {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .menu-dots {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 1.5rem;
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      transition: background-color 0.2s;
      position: relative;
    }

    .nav-item:hover {
      background-color: var(--sidebar-hover);
    }

    .nav-item.active {
      background-color: var(--primary-color);
    }

    .sub-menu {
      margin-left: 2rem;
    }

    .notification-badge {
      background: #ff4444;
      color: white;
      padding: 0.15rem 0.5rem;
      border-radius: 10px;
      font-size: 0.75rem;
      position: absolute;
      right: 1rem;
    }

    .sidebar-footer {
      margin-top: auto;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .main-content {
      flex: 1;
      margin-left: 280px;
      display: flex;
      flex-direction: column;
    }

    .header {
      background-color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--header-height);
      border-bottom: 1px solid #eee;
    }

    .content {
      padding: 2rem;
      background-color: #f5f7fa;
      flex: 1;
    }

    .page-title {
      font-size: 2rem;
      margin: 0 0 0.5rem 0;
      color: #333;
    }

    .page-subtitle {
      color: #666;
      margin: 0 0 2rem 0;
    }

    .language-selector {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .user-welcome {
      text-align: right;
    }

    .current-time {
      font-size: 0.875rem;
      color: #666;
    }
  `]
})
export class MainLayoutComponent {
  @Input() pageTitle: string = '';
  user: User | null = null;
  currentDate = new Date();

  constructor(private authService: AuthService) {
    this.authService.currentUser$.subscribe(
      user => this.user = user
    );

    // Update time every minute
    setInterval(() => {
      this.currentDate = new Date();
    }, 60000);
  }
}