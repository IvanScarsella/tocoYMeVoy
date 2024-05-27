import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-game-aplication',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent, RouterLink, RouterOutlet],
  templateUrl: './game-aplication.component.html',
  styles: ``
})
export class GameAplicationComponent implements OnInit {

  game?: any

  private _route = inject(ActivatedRoute)
  private _gamesService = inject(GamesService)

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.game = this._gamesService.getGame(params['id'])[0]
    })
    console.log(this.game)
  }

}
