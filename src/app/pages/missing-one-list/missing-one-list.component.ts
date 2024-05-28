import { Component, OnInit, inject } from '@angular/core';
import { MissingOneCardComponent } from '../../components/missing-one-card/missing-one-card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/chat.model';

@Component({
  selector: 'app-missing-one-list',
  standalone: true,
  imports: [MissingOneCardComponent, NavbarComponent, RouterLink, RouterOutlet],
  templateUrl: './missing-one-list.component.html',
  styles: ``
})
export class MissingOneListComponent implements OnInit {

  missingOneCards?: Game[]

  private _gamesService = inject(GamesService)

  ngOnInit(): void {
    this.missingOneCards = this._gamesService.getMissingOneList()
  }
}
