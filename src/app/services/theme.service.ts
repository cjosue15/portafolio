import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeEnum, THEME } from '../models/theme.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _changeTheme: BehaviorSubject<ThemeEnum>;

  constructor() {
    this._changeTheme = new BehaviorSubject(this.getFromLocalStorage());
  }

  get changeTheme$(): Observable<ThemeEnum> {
    return this._changeTheme.asObservable();
  }

  setTheme(theme = ThemeEnum.LIGHT): void {
    this._changeTheme.next(theme);
    this._saveInLocalStorage(THEME, theme);
  }

  getFromLocalStorage(): ThemeEnum {
    const theme = localStorage.getItem(THEME);

    return theme ? <ThemeEnum>theme : ThemeEnum.LIGHT;
  }

  private _saveInLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
