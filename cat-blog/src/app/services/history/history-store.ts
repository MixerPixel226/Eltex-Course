import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { History, HistoryForm } from '../../types/history.interface';
import { HISTORY_SERVICE_TOKEN } from './history-service.token';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  private destroyRef = inject(DestroyRef);

  public changePage(newValue: number) {
    this._currentPage.set(newValue);
    this.getHistories();
  }

  public getHistories() {
    this.hisService
      .getHistoriesFromServer(this._currentPage())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((response) => {
        console.log(response.items);
        this._histories.set(response.items);
        this._totalHistories.set(response.total);
      });
  }

  public deleteHistory(id: string) {
    this.hisService
      .deleteHistoryFromServer(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.getHistories();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  public addHistory(objData: HistoryForm, file: File | null) {
    this.hisService
      .addHistoryOnServer(objData, file)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.getHistories(),
        error: (error) => console.log(error),
      });
  }

  public editingHistory(id: string, objData: HistoryForm, file: File | null) {
    this.hisService
      .editingHistoryOnServer(id, objData, file)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.getHistories(),
        error: (error) => console.log(error),
      });
  }
}
