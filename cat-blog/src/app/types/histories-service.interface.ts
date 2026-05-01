import { Observable } from 'rxjs';
import { History } from '../types/history.interface';

export interface IHistoryService {
  getHistoriesFromServer(page: number): Observable<{ data: History[]; total: number }>;
  addHistoryOnServer(newHis: History): Observable<{ success: Boolean; message?: string }>;
  editingHistoryOnServer(editHis: History): Observable<{ success: Boolean; message?: string }>;
  deleteHistoryFromServer(id: string): Observable<{ success: Boolean; message?: string }>;
}
