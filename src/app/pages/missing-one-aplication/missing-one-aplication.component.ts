import { Component, OnInit, inject } from '@angular/core';
import { Game } from '../../models/chat.model';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ErrorModalComponent } from '../../components/error-modal/error-modal.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-missing-one-aplication',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent, ModalComponent, ErrorModalComponent, RouterLink, RouterOutlet],
  templateUrl: './missing-one-aplication.component.html',
  styles: ``
})
export class MissingOneAplicationComponent implements OnInit {

  game?: Game
  showModal: boolean = false

  private _gamesService = inject(GamesService)
  private _route = inject(ActivatedRoute)

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.game = this._gamesService.getMissingOne(params['id'])[0]
    })
  }


  handleShowModal() {
    this.showModal = !this.showModal
  }

}
