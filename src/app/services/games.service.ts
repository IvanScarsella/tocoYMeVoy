import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gamesList: any[] = [
    { id: 1, title: '5 vs 5', location: 'El calcio futbol: 3 entre 42 y 43, La Plata', date: '24/03/24', schedule: '21:00', front: true, image: '../../../assets/game1.jpg', price: '$3000', genre: 'Masculino' },
    { id: 2, title: '7 vs 7', location: 'Quilmes futbol: Av. Carlos Pellegrini y Av. La Plata, Quilmes', date: '25/03/24', schedule: '22:00', front: false, image: '../../../assets/game2.jpg', price: '$3500', genre: 'Femenino' },
  ]

  getGamesList() {
    return this.gamesList
  }

  getGame(id: number) {
    return this.gamesList.filter((game) => game.id == id)
  }

  constructor() { }
}
