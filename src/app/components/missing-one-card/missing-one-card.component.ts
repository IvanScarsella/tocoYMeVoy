import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-missing-one-card',
  standalone: true,
  imports: [],
  templateUrl: './missing-one-card.component.html',
  styles: ``
})
export class MissingOneCardComponent {

  @Input() data?: any
  // missingOneData: any[] = [

  // ]
  constructor() {
    if (this.data) {
      console.log(this.data)
    }
  }

}
