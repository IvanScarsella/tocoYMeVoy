import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './games.component.html',
  styles: ``
})
export class GamesComponent {

  gamesList: any[] = [
    { title: '5 vs 5', location: 'El calcio futbol: 3 entre 42 y 43, La Plata', date: '24/03/24', schedule: '21:00', front: true },
    { title: '7 vs 7', location: 'Quilmes futbol: Av. Carlos Pellegrini y Av. La Plata, Quilmes', date: '25/03/24', schedule: '22:00', front: false },
  ]

}
