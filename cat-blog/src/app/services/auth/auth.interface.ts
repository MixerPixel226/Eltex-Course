import { Signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  createdAt?: string;
  lastActiveTime?: string;
  isBlocked?: boolean;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: string;
  user: User;
}

export interface RegisterResponse {
  message: string;
  user: User;
}
export interface AuthService {
  currentUser: WritableSignal<User | null>;
  isAuthenticated: Signal<boolean>;

  login(data: any): Observable<LoginResponse>;
  register(data: any): Observable<LoginResponse>;
  logout(): Observable<any>;
  getMe(): Observable<User>;
}
