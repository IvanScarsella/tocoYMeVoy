import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats: Chat[] = [
    { friend: 'Brenda Quiroga', image: '../assets/profile2.jpg', friendMessages: [], userMessages: [], viewed: false },
    {
      friend: 'Iván Riquelme', image: '../assets/friend3.png', friendMessages: [
        { text: 'Hola capo todo bien vos? Si si, trae la que quieras no hay problema, te aviso que tenemos arquero rotativo, no te jode no?', dateTime: 'Sat May 25 2024 01:37:58 GMT-0300' },
        { text: 'Jajaja tranqui, somos todos malos atajando nosotros', dateTime: 'Sat May 25 2024 01:39:58 GMT-0300' },
        { text: 'Dale dale, nos vemos!!', dateTime: 'Sat May 25 2024 01:41:58 GMT-0300' },
      ], userMessages: [
        { text: 'Hola ivan todo bien? vi que no van a usar pecheras, puedo llevar cualquier casaca?', dateTime: 'Sat May 25 2024 01:36:58 GMT-0300' },
        { text: 'Dale joya! No no tengo problema en atajar, soy horrible pero me la banco jaja', dateTime: 'Sat May 25 2024 01:38:58 GMT-0300' },
        { text: 'Ah bueno me quedo mas tranquilo entonces jaja nos vemos alla amigo', dateTime: 'Sat May 25 2024 01:40:58 GMT-0300' },
      ], viewed: false
    },
    {
      friend: 'Sofía Amarilla', image: '../assets/friend2.png', friendMessages: [
        { text: 'Dale genial!! nos vemos en un rato!!', dateTime: 'Sat May 18 2024 11:37:58 GMT-0300' },
        { text: 'Hola ale! Como va todo bien? estuve hablando con los chicos y queremos agregarte al grupo para que te sumes cuando quieras, te gustaria?', dateTime: 'Sun May 19 2024 11:06:58 GMT-0300' },
        { text: 'Joya! pasame tu numero y te agrego', dateTime: 'Sun May 19 2024 11:08:58 GMT-0300' },
      ], userMessages: [
        { text: 'Si si quedate tranqui, estoy saliendo', dateTime: 'Sat May 18 2024 11:27:58 GMT-0300' },
        { text: 'Nos vemos!!', dateTime: 'Sat May 18 2024 11:39:58 GMT-0300' },
        { text: 'Hola sofi bien vos? Si si de una me sumo! La pase joya la otra vez', dateTime: 'Sun May 19 2024 11:07:58 GMT-0300' },
        { text: '2213380754', dateTime: 'Sun May 19 2024 11:10:58 GMT-0300' },
      ], viewed: true
    },
    { friend: 'Julián Baldaro', image: '../assets/friend1.png', friendMessages: [], userMessages: [], viewed: false },
    { friend: 'Marcelo Peralta', image: '../assets/friend5.png', friendMessages: [], userMessages: [], viewed: false },
  ]

  getChat(friend: string) {
    return this.chats.filter((chat) => chat.friend === friend)
  }

  constructor() { }
}
