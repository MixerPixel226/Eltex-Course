import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ELEMENTS_PAGE } from './history.config';
import { History, HistoryForm } from '../../types/history.interface';
import { catchError, throwError } from 'rxjs';
import { IHistoryService } from '../../types/histories-service.interface';

@Injectable()
export class HistoryServiceHttp implements IHistoryService {
  public http = inject(HttpClient);

  getHistoriesFromServer(page: number) {
    return this.http.get<{ items: History[]; total: number; page: number; limit: number }>(
      `/api/articles?page=${page}&limit=${ELEMENTS_PAGE}`,
    );
  }

  addHistoryOnServer(newHis: HistoryForm, file: File | null) {
    const formData = new FormData();

    formData.append('title', newHis.title);
    formData.append('content', newHis.content);
    if (newHis.categoryId) {
      formData.append('categoryId', newHis.categoryId.toString());
    }

    if (file) {
      formData.append('image', file);
    }

    return this.http.post<History>('/api/articles', formData).pipe(
      catchError((err: HttpErrorResponse) => {
        const message = err.error?.message || 'Ошибка сервера';
        return throwError(() => new Error(message));
      }),
    );
  }

  editingHistoryOnServer(id: string, editHis: HistoryForm, file: File | null) {
    const formData = new FormData();

    formData.append('title', editHis.title);
    formData.append('content', editHis.content);
    if (editHis.categoryId) {
      formData.append('categoryId', editHis.categoryId.toString());
    }

    if (file) {
      formData.append('image', file);
    }

    return this.http.patch<History>(`/api/articles/${id}`, formData).pipe(
      catchError((err: HttpErrorResponse) => {
        const message = err.error?.message || 'Ошибка сервера';
        return throwError(() => new Error(message));
      }),
    );
  }

  deleteHistoryFromServer(id: string) {
    return this.http.delete<Omit<History, 'id'>>(`/api/articles/${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        const message = err.error?.message || 'Ошибка сервера';
        return throwError(() => new Error(message));
      }),
    );
  }
}
