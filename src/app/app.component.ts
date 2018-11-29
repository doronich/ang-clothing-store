import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly ru = 'rus';
  readonly en = 'en';
  isEng = true;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.en);

  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.isEng = language === this.en;
  }
}
