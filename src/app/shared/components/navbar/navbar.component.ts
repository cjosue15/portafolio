import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeEnum } from 'src/app/models/theme.enum';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  theme: ThemeEnum;
  themeEnum: typeof ThemeEnum = ThemeEnum;

  constructor(private themeService: ThemeService, private render2: Renderer2) {
    this.theme = ThemeEnum.LIGHT;
  }

  ngOnInit(): void {
    this.themeService.changeTheme$.subscribe((theme) => {
      this.theme = theme;
      this._applyClassInHTML(this.theme);
    });
  }

  changeTheme(): void {
    const themeToSet =
      this.theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    this.themeService.setTheme(themeToSet);
    this._applyClassInHTML(themeToSet);
  }

  private _applyClassInHTML(theme: ThemeEnum): void {
    this.render2.setAttribute(document.body, 'class', `theme--${theme}`);
  }
}
