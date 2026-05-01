import { InjectionToken } from '@angular/core';
import { IHistoryService } from '../../types/histories-service.interface';

export const HISTORY_SERVICE_TOKEN = new InjectionToken<IHistoryService>('HISTORY_SERVICE_TOKEN');
