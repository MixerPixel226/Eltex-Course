import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HISTORY_SERVICE_TOKEN } from './services/history/history-service.token';
import { HistoryService } from './services/history/history-service';
import { environment } from '../environments/environment';
import { HistoryServiceHttp } from './services/history/history-service-http';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client';
import { authInterceptor } from './services/auth/auth.interceptor';
import { AUTH_SERVICE_TOKEN } from './services/auth/auth.token';
import { AuthApi } from './services/auth/auth-api';
import { AuthProd } from './services/auth/auth-prod';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: HISTORY_SERVICE_TOKEN,
      useClass: environment.useDevService ? HistoryServiceHttp : HistoryService,
    },
    {
      provide: AUTH_SERVICE_TOKEN,
      useClass: environment.useDevService ? AuthApi : AuthProd,
    },
    provideApollo(() => {
      const httpLink = inject(HttpLink);

      return {
        link: httpLink.create({ uri: '/graphql' }),
        cache: new InMemoryCache(),
      };
    }),
  ],
};
