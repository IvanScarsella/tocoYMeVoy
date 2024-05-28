import { Component, OnInit, Output, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component'
import { MissingOneCardComponent } from '../../components/missing-one-card/missing-one-card.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/chat.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, MissingOneCardComponent, RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit {

  homeCards: any[] = [
    { image: '../../../assets/home1.png', url: '/missingOneList', title: 'Me falta uno', description: 'Si te faltan jugadores entrá a crear tu búsqueda' },
    { image: '../../../assets/home2.jpg', url: '/games', title: 'Partidos', description: 'Partidos programados dentro de uno o dos días' },
    { image: '../../../assets/home3.png', url: '/friends', title: 'Amigos', description: 'Lista de amigos que hiciste en la cancha' },
  ]

  @Output() missingOneCards?: Game[]

  private _gamesService = inject(GamesService)

  ngOnInit(): void {
    this.missingOneCards = this._gamesService.getMissingOneList().slice(0, 2)
  }
}
