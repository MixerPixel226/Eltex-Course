import { Observable } from 'rxjs';
import { History, HistoryForm } from '../types/history.interface';

export interface IHistoryService {
  getHistoriesFromServer(
    page: number,
  ): Observable<{ items: History[]; total: number; page: number; limit: number }>;
  addHistoryOnServer(newHis: HistoryForm, file: File | null): Observable<History>;
  editingHistoryOnServer(id: string, editHis: HistoryForm, file: File | null): Observable<History>;
  deleteHistoryFromServer(id: string): Observable<Omit<History, 'id'>>;
}
