import { Component, Output, output } from '@angular/core';
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

  homeCards: any[] = [
    { image: '../../../assets/home1.png', title: 'Me falta uno', description: 'Si te faltan jugadores entrá a crear tu búsqueda' },
    { image: '../../../assets/home2.jpg', title: 'Partidos', description: 'Partidos programados dentro de uno o dos días' },
    { image: '../../../assets/home3.png', title: 'Amigos', description: 'Lista de amigos que hiciste en la cancha' },
  ]

  @Output() missingOneCards: any[] = [
    { title: '5 vs 5 - 19:00 Hs', description: 'Falta uno para completar', image: '../../../assets/profile1.jpg' },
    { title: '7 vs 7 - 22:00 Hs', description: 'Faltan dos para completar mixto', image: '../../../assets/profile2.jpg' }
  ]

}
