import { inject, Injectable, signal } from '@angular/core';
import { History } from '../../types/history.interface';
import { HISTORY_SERVICE_TOKEN } from './history-service.token';

@Injectable()
export class HistoryStore {
  constructor() {}

  private hisService = inject(HISTORY_SERVICE_TOKEN);

  private _histories = signal<History[]>([]);
  public histories = this._histories.asReadonly();

  private _currentPage = signal<number>(1);
  public currentPage = this._currentPage.asReadonly();

  private _totalHistories = signal<number>(0);
  public totalHistories = this._totalHistories.asReadonly();

  public changePage(newValue: number) {
    this._currentPage.set(newValue);
    this.getHistories();
  }

  public getHistories() {
    this.hisService.getHistoriesFromServer(this._currentPage()).subscribe((response) => {
      this._histories.set(response.data);
      this._totalHistories.set(response.total);
    });
  }

  public deleteHistory(id: string) {
    this.hisService.deleteHistoryFromServer(id).subscribe((response) => {
      if (response.success) {
        this.getHistories();
      } else {
        console.log(response.message);
      }
    });
  }

  public editingHistory(objData: History) {
    this.hisService.editingHistoryOnServer(objData).subscribe((response) => {
      if (response.success) {
        this.getHistories();
      } else {
        console.log(response.message);
      }
    });
  }

  public addHistory(objData: any) {
    this.hisService.addHistoryOnServer(objData).subscribe((response) => {
      if (response.success) this.getHistories();
    });
  }
}
