import { Injectable, signal } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';
import { AuthService, LoginResponse, User } from './auth.interface';

@Injectable()
export class AuthProd implements AuthService {
  public currentUser = signal<User | null>(null);
  public isAuthenticated = signal<boolean>(!!localStorage.getItem('access_token'));

  private readonly USERS_DB_KEY = 'mock_users_db';

  constructor() {
    if (!localStorage.getItem(this.USERS_DB_KEY)) {
      const defaultUsers = [
        {
          id: 'admin-static-id-00000',
          username: 'admin',
          email: 'admin@meow.ru',
          password: 'admin',
          role: 'admin',
        },
      ];
      localStorage.setItem(this.USERS_DB_KEY, JSON.stringify(defaultUsers));
    }

    const savedUser = localStorage.getItem('mock_current_user');
    if (savedUser) {
      this.currentUser.set(JSON.parse(savedUser));
    }
  }

  private getMockDB(): any[] {
    const db = localStorage.getItem(this.USERS_DB_KEY);
    return db ? JSON.parse(db) : [];
  }

  login(data: any): Observable<LoginResponse> {
    const users = this.getMockDB();

    const foundUser = users.find((u) => u.username === data.login || u.email === data.login);

    if (!foundUser || foundUser.password !== data.password) {
      return throwError(() => {
        const error: any = new Error('Unauthorized');
        error.status = 401;
        error.error = { message: 'Неверный логин или пароль' };
        return error;
      }).pipe(delay(500));
    }

    const userResponse: User = {
      id: foundUser.id,
      username: foundUser.username,
      email: foundUser.email,
      role: foundUser.role,
    };

    const mockResponse: LoginResponse = {
      access_token: `mock-jwt-token-for-${userResponse.username}`,
      token_type: 'Bearer',
      expires_in: '1h',
      user: userResponse,
    };

    return of(mockResponse).pipe(
      delay(500),
      tap((res) => {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('mock_current_user', JSON.stringify(res.user));
        this.currentUser.set(res.user);
        this.isAuthenticated.set(true);
      }),
    );
  }

  register(data: any): Observable<LoginResponse> {
    const users = this.getMockDB();

    const isConflict = users.some((u) => u.username === data.login || u.email === data.email);

    if (isConflict) {
      return throwError(() => {
        const error: any = new Error('Conflict');
        error.status = 409;
        error.error = { message: 'Пользователь с таким логином или email уже существует' };
        return error;
      }).pipe(delay(500));
    }

    const newUser = {
      id: crypto.randomUUID(),
      username: data.login,
      email: data.email,
      password: data.password,
      role: 'admin',
    };

    users.push(newUser);
    localStorage.setItem(this.USERS_DB_KEY, JSON.stringify(users));

    return of({ message: 'Пользователь успешно зарегистрирован' }).pipe(
      delay(500),
      switchMap(() => this.login({ login: data.login, password: data.password })),
    );
  }

  getMe(): Observable<User> {
    if (this.currentUser()) {
      return of(this.currentUser()!).pipe(delay(200));
    }
    return throwError(() => new Error('Не авторизован'));
  }

  logout(): Observable<any> {
    return of({ message: 'Успешный выход' }).pipe(
      delay(300),
      tap(() => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('mock_current_user');
        this.currentUser.set(null);
        this.isAuthenticated.set(false);
      }),
    );
  }
}
