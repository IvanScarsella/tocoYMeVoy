import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component'
import { MissingOneCardComponent } from '../../components/missing-one-card/missing-one-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, MissingOneCardComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
