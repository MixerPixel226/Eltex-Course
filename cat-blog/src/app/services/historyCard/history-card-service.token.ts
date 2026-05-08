import { InjectionToken } from '@angular/core';
import { IHistoryCardService } from './history-card-service.interface';

export const HISTORY_CARD_SERVICE_TOKEN = new InjectionToken<IHistoryCardService>(
  'HISTORY_CARD_SERVICE_TOKEN',
);
