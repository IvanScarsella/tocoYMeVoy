import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-missing-one-card',
  standalone: true,
  imports: [],
  templateUrl: './missing-one-card.component.html',
  styles: ``
})
export class MissingOneCardComponent {

  @Input() data?: any

}
