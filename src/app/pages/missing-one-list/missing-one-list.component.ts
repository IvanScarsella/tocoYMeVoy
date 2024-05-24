import { Component } from '@angular/core';
import { MissingOneCardComponent } from '../../components/missing-one-card/missing-one-card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-missing-one-list',
  standalone: true,
  imports: [MissingOneCardComponent, NavbarComponent, RouterLink, RouterOutlet],
  templateUrl: './missing-one-list.component.html',
  styles: ``
})
export class MissingOneListComponent {

  missingOneCards: any[] = [
    { title: '5 vs 5 - 19:00 Hs', description: 'Falta uno para completar', image: '../../../assets/profile1.jpg' },
    { title: '7 vs 7 - 22:00 Hs', description: 'Faltan dos para completar mixto', image: '../../../assets/profile2.jpg' },
    { title: '6 vs 6 - 23:00 Hs', description: 'Falta uno para completar', image: '../../../assets/profile3.png' },
    { title: '5 vs 5 - 21:00 Hs', description: 'Falta uno para completar', image: '../../../assets/profile4.jpg' },
    { title: '5 vs 5 - 20:00 Hs', description: 'Falta uno para completar', image: '../../../assets/profile5.jpg' },
  ]

}
