import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  private _score = signal<number | null>(Number(localStorage.getItem('score')) || 300);
  public score = this._score.asReadonly();

  constructor() {
    effect(() => {
      localStorage.setItem('score', String(this._score()));
    });
  }

  public payByScore(amount: number) {
    this._score.update((prev) => (prev ?? 0) - amount);
  }

  public plusScore(amount: number) {
    this._score.update((prev) => (prev ?? 0) + amount);
  }
}
