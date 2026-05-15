import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HISTORY_SERVICE_TOKEN } from './services/history/history-service.token';
import { HistoryService } from './services/history/history-service';
import { environment } from '../environments/environment';
import { HistoryServiceHttp } from './services/history/history-service-http';
import { provideHttpClient } from '@angular/common/http';

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
  ],
};
