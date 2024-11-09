import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="container">
      <div class="login-container">
        <div class="card">
          <h2>Login</h2>
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                class="form-control"
                formControlName="email"
                [class.error]="isFieldInvalid('email')"
              />
              <div class="error-message" *ngIf="isFieldInvalid('email')">
                Please enter a valid email
              </div>
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input
                id="password"
                type="password"
                class="form-control"
                formControlName="password"
                [class.error]="isFieldInvalid('password')"
              />
              <div class="error-message" *ngIf="isFieldInvalid('password')">
                Password is required
              </div>
            </div>

            <div class="error-message" *ngIf="error">
              {{ error }}
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              [disabled]="loginForm.invalid || loading"
            >
              <span *ngIf="!loading">Login</span>
              <div *ngIf="loading" class="loading-spinner"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 400px;
      margin: 2rem auto;
    }
    
    h2 {
      margin-top: 0;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
    }

    .error {
      border-color: var(--error-color);
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string): boolean {
    const formControl = this.loginForm.get(field);
    return !!formControl && formControl.invalid && formControl.touched;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.error = '';
      
      const { email, password } = this.loginForm.value;
      
      this.authService.login(email, password).subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.error = error.message;
          this.loading = false;
        }
      });
    } else {
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
}