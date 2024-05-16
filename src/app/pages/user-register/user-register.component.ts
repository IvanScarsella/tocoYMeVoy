import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerIntl, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-user-register',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './user-register.component.html',
  styles: ``
})
export class UserRegisterComponent
// implements OnInit 
{

  // constructor(
  //   private _adapter: DateAdapter<any>,
  //   private _intl: MatDatepickerIntl,
  //   @Inject(MAT_DATE_LOCALE) private _locale: string = 'fr',
  // ) { }

  // ngOnInit() {
  //   this.updateCloseButtonLabel('カレンダーを閉じる');
  // }

  // french() {
  //   this._locale = 'fr';
  //   this._adapter.setLocale(this._locale);
  //   this.updateCloseButtonLabel('Fermer le calendrier');
  // }

  // updateCloseButtonLabel(label: string) {
  //   this._intl.closeCalendarLabel = label;
  //   this._intl.changes.next();
  // }

  // getDateFormatString(): string {
  //   if (this._locale === 'ja-JP') {
  //     return 'YYYY/MM/DD';
  //   } else if (this._locale === 'fr') {
  //     return 'DD/MM/YYYY';
  //   }
  //   return '';
  // }

}
