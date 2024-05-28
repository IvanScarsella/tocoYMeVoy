import { Injectable } from '@angular/core';
import { Game } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  missingOneList: Game[] = [
    { id: 1, title: '5 vs 5', admin: 'Santiago Flores', date: 'Hoy', schedule: '19:00 Hs', front: false, location: '131 y 44, Complejo el bosque, La Plata', price: '$2500', description: 'Falta uno para completar', image: '../../../assets/profile1.jpg', genre: 'Masculino' },
    { id: 2, title: '7 vs 7', admin: 'Brenda Quiroga', date: 'Mañana', schedule: '22:00 Hs', front: true, location: '12 y 69, Camp Nou, La Plata', price: '$3000', description: 'Faltan dos para completar mixto', image: '../../../assets/profile2.jpg', genre: 'Masculino' },
    { id: 3, title: '6 vs 6', admin: 'Ricardo Alberti', date: 'Hoy', schedule: '23:00 Hs', front: false, location: '12 y 69, Camp Nou, La Plata', price: '$2500', description: 'Falta uno para completar', image: '../../../assets/profile3.png', genre: 'Masculino' },
    { id: 4, title: '5 vs 5', admin: 'Matías Domínguez', date: 'Hoy', schedule: '21:00 Hs', front: false, location: '12 y 69, Camp Nou, La Plata', price: '$2500', description: 'Falta uno para completar', image: '../../../assets/profile4.jpg', genre: 'Masculino' },
    { id: 5, title: '5 vs 5', admin: 'Maite Figueras', date: 'Hoy', schedule: '20:00 Hs', front: false, location: '12 y 69, Camp Nou, La Plata', price: '$2500', description: 'Falta uno para completar', image: '../../../assets/profile5.jpg', genre: 'Masculino' },
  ]

  gamesList: Game[] = [
    { id: 1, title: '5 vs 5', location: 'El calcio futbol: 3 entre 42 y 43, La Plata', date: '24/03/24', schedule: '21:00', front: true, image: '../../../assets/game1.jpg', price: '$3000', genre: 'Masculino', admin: 'Fulano', description: '' },
    { id: 2, title: '7 vs 7', location: 'Quilmes futbol: Av. Carlos Pellegrini y Av. La Plata, Quilmes', date: '25/03/24', schedule: '22:00', front: false, image: '../../../assets/game2.jpg', price: '$3500', genre: 'Femenino', admin: 'Fulano', description: '' },
  ]

  getGamesList() {
    return this.gamesList
  }

  getMissingOneList() {
    return this.missingOneList
  }

  getGame(id: number) {
    return this.gamesList.filter((game) => game.id == id)
  }
  getMissingOne(id: number) {
    return this.missingOneList.filter((game) => game.id == id)
  }

  constructor() { }
}
