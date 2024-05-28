import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/chat.model';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [NavbarComponent, RouterLink, RouterOutlet],
  templateUrl: './games.component.html',
  styles: ``
})
export class GamesComponent implements OnInit {

  gamesList?: Game[]

  private _gamesService = inject(GamesService)

  ngOnInit(): void {
    this.gamesList = this._gamesService.getGamesList()
  }

}
