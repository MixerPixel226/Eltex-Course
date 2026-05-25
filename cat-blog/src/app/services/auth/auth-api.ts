import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { AuthService, LoginResponse, RegisterResponse, User } from './auth.interface';
@Injectable()
export class AuthApi implements AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api';

  public currentUser = signal<User | null>(null);
  public isAuthenticated = signal<boolean>(!!localStorage.getItem('access_token'));

  constructor() {
    if (this.isAuthenticated()) {
      this.getMe().subscribe({
        error: () => this.clearAuth(),
      });
    }
  }

  login(data: any): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(
        `${this.apiUrl}/auth/login`,
        {
          login: data.login,
          password: data.password,
        },
        { withCredentials: true },
      )
      .pipe(tap((res) => this.handleAuthSuccess(res)));
  }

  register(data: any): Observable<LoginResponse> {
    const payload = {
      username: data.login,
      email: data.email,
      password: data.password,
      isAdmin: true,
    };

    return this.http.post<RegisterResponse>(`${this.apiUrl}/users/register`, payload).pipe(
      tap((data) => console.log(data)),
      switchMap(() => this.login({ login: data.login, password: data.password })),
    );
  }

  getMe(): Observable<User> {
    return this.http
      .get<User>(`${this.apiUrl}/auth/me`, { withCredentials: true })
      .pipe(tap((user) => this.currentUser.set(user)));
  }

  logout(): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/auth/logout`, { withCredentials: true })
      .pipe(tap(() => this.clearAuth()));
  }

  private handleAuthSuccess(res: LoginResponse) {
    localStorage.setItem('access_token', res.access_token);
    this.currentUser.set(res.user);
    this.isAuthenticated.set(true);
  }

  private clearAuth() {
    localStorage.removeItem('access_token');
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
  }
}
