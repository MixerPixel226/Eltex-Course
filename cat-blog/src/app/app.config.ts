import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HISTORY_SERVICE_TOKEN } from './services/history/history-service.token';
import { HistoryService } from './services/history/history-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    {
      provide: HISTORY_SERVICE_TOKEN,
      useClass: HistoryService,
    },
  ],
};
