import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { History } from '../../types/history.interface';
import { IHistoryService } from '../../types/histories-service.interface';
import { ELEMENTS_PAGE } from './history.config';

@Injectable()
export class HistoryService implements IHistoryService {
  private HISTORIES_STORAGE: string = 'histories';

  getHistoriesFromServer(page: number) {
    return new Observable<{ data: History[]; total: number }>((sub) => {
      const histories = JSON.parse(localStorage.getItem(this.HISTORIES_STORAGE) ?? '[]');
      const index = (page - 1) * ELEMENTS_PAGE;
      const cutted = histories.slice(index, index + ELEMENTS_PAGE);
      sub.next({ data: cutted, total: histories.length });
      sub.complete();
    });
  }

  addHistoryOnServer(newHis: History) {
    return new Observable<{ success: Boolean; message?: string }>((sub) => {
      const histories = JSON.parse(localStorage.getItem(this.HISTORIES_STORAGE) ?? '[]');

      const newHistory = {
        id: crypto.randomUUID(),
        title: newHis.title,
        desc: newHis.desc,
        img: newHis.img || 'assets/no-image.png',
      };

      const updateHistories = [...histories, newHistory];
      localStorage.setItem(this.HISTORIES_STORAGE, JSON.stringify(updateHistories));
      sub.next({ success: true });
      sub.complete();
    });
  }

  editingHistoryOnServer(editHis: History) {
    return new Observable<{ success: Boolean; message?: string }>((sub) => {
      const histories: History[] = JSON.parse(localStorage.getItem(this.HISTORIES_STORAGE) ?? '[]');

      const deletedHistory = histories.some((e) => e.id === editHis.id);

      if (!deletedHistory) {
        sub.next({ success: false, message: 'Несуществующий элемент' });
        sub.complete();
        return;
      }

      const updateList = histories.map((el) => (el.id === editHis.id ? editHis : el));
      localStorage.setItem(this.HISTORIES_STORAGE, JSON.stringify(updateList));

      sub.next({ success: true });
      sub.complete();
    });
  }

  deleteHistoryFromServer(id: string) {
    return new Observable<{ success: Boolean; message?: string }>((sub) => {
      const histories: History[] = JSON.parse(localStorage.getItem(this.HISTORIES_STORAGE) ?? '[]');

      const deletedHistory = histories.some((e) => e.id === id);

      if (!deletedHistory) {
        sub.next({ success: false, message: 'Несуществующий элемент' });
        sub.complete();
        return;
      }

      const updateList = histories.filter((e) => e.id !== id);
      localStorage.setItem(this.HISTORIES_STORAGE, JSON.stringify(updateList));

      sub.next({ success: true });
      sub.complete();
    });
  }
}
