import { Component, OnInit, inject } from '@angular/core';
import { Game } from '../../models/chat.model';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-missing-one-aplication',
  standalone: true,
  imports: [NavbarComponent, RouterLink, RouterOutlet, ButtonComponent],
  templateUrl: './missing-one-aplication.component.html',
  styles: ``
})
export class MissingOneAplicationComponent implements OnInit {

  game?: Game

  private _gamesService = inject(GamesService)
  private _route = inject(ActivatedRoute)

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.game = this._gamesService.getMissingOne(params['id'])[0]
    })
  }

}
