import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HISTORY_SERVICE_TOKEN } from './services/history/history-service.token';
import { HistoryService } from './services/history/history-service';
import { environment } from '../environments/environment';
import { HistoryServiceHttp } from './services/history/history-service-http';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(withEventReplay()),
    {
      provide: HISTORY_SERVICE_TOKEN,
      useClass: environment.useDevService ? HistoryServiceHttp : HistoryService,
    },
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);

      return {
        link: httpLink.create({ uri: '/graphql' }),
        cache: new InMemoryCache(),
      };
    }),
  ],
};
