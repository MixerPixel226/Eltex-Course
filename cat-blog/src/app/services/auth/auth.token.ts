import { InjectionToken } from '@angular/core';
import { AuthService } from './auth.interface';

export const AUTH_SERVICE_TOKEN = new InjectionToken<AuthService>('HISTORY_SERVICE_TOKEN');
