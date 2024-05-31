import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Game } from '../../models/chat.model';
import { ModalComponent } from '../../components/modal/modal.component';
import { ErrorModalComponent } from '../../components/error-modal/error-modal.component';

@Component({
  selector: 'app-game-aplication',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent, ModalComponent, ErrorModalComponent, RouterLink, RouterOutlet],
  templateUrl: './game-aplication.component.html',
  styles: ``
})
export class GameAplicationComponent implements OnInit {

  game?: Game
  showModal: boolean = false

  private _route = inject(ActivatedRoute)
  private _gamesService = inject(GamesService)

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.game = this._gamesService.getGame(params['id'])[0]
    })
  }

  handleShowModal() {
    this.showModal = !this.showModal
  }

}
