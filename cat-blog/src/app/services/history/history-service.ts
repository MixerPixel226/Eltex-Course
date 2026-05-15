import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryForm, History } from '../../types/history.interface';
import { IHistoryService } from '../../types/histories-service.interface';
import { ELEMENTS_PAGE, HISTORIES_STORAGE } from './history.config';

@Injectable()
export class HistoryService implements IHistoryService {
  getHistoriesFromServer(page: number) {
    return new Observable<{ items: History[]; total: number; page: number; limit: number }>(
      (sub) => {
        const histories = JSON.parse(localStorage.getItem(HISTORIES_STORAGE) ?? '[]');
        const index = (page - 1) * ELEMENTS_PAGE;
        const cutted = histories.slice(index, index + ELEMENTS_PAGE);
        sub.next({ items: cutted, total: histories.length, page: page, limit: ELEMENTS_PAGE });
        sub.complete();
      },
    );
  }

  addHistoryOnServer(newHis: HistoryForm) {
    return new Observable<History>((sub) => {
      const histories = JSON.parse(localStorage.getItem(HISTORIES_STORAGE) ?? '[]');

      const newHistory = {
        id: crypto.randomUUID(),
        title: newHis.title,
        content: newHis.content,
        imgSrc: newHis.imgSrc || null,
        rating: 0,
        categoryId: newHis.categoryId ?? null,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      };

      const updateHistories = [...histories, newHistory];
      localStorage.setItem(HISTORIES_STORAGE, JSON.stringify(updateHistories));
      sub.next(newHistory);
      sub.complete();
    });
  }

  editingHistoryOnServer(id: string, editHis: HistoryForm) {
    return new Observable<History>((sub) => {
      const histories: History[] = JSON.parse(localStorage.getItem(HISTORIES_STORAGE) ?? '[]');

      const editingHistory = histories.find((e) => e.id === id);

      if (!editingHistory) {
        sub.error({ message: 'Несуществующий элемент' });
        return;
      }

      const updateElement = { ...editingHistory, ...editHis };

      const updateList = histories.map((el) => (el.id === id ? updateElement : el));
      localStorage.setItem(HISTORIES_STORAGE, JSON.stringify(updateList));

      sub.next(updateElement);
      sub.complete();
    });
  }

  deleteHistoryFromServer(idDelete: string) {
    return new Observable<Omit<History, 'id'>>((sub) => {
      const histories: History[] = JSON.parse(localStorage.getItem(HISTORIES_STORAGE) ?? '[]');

      const deletedHistory = histories.find((e) => e.id === idDelete);

      if (deletedHistory === undefined) {
        sub.error({ message: 'Нет таких ребят' });
        return;
      }

      const updateList = histories.filter((e) => e.id !== idDelete);
      localStorage.setItem(HISTORIES_STORAGE, JSON.stringify(updateList));

      const { id, ...delHistory } = deletedHistory;
      sub.next(delHistory);
      sub.complete();
    });
  }
}
