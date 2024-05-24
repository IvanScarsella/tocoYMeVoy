import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './chat.component.html',
  styles: ``
})
export class ChatComponent {

  contactsList: any[] = [
    { image: '../../../assets/profile1.jpg', name: 'Santiago Flores', lastMessage: 'Coordina con tu nuevo compañero' },
    { image: '../../../assets/friend3.png', name: 'Iván Riquelme', lastMessage: 'Dale dale, nos vemos!!' },
    { image: '../../../assets/friend2.png', name: 'Sofía Amarilla', lastMessage: 'Visto el domingo' },
    { image: '../../../assets/friend1.png', name: 'Julián Baldaro', lastMessage: 'Nos vemos capo' },
    { image: '../../../assets/friend5.png', name: 'Marcelo Peralta', lastMessage: 'Visto la semana pasada' },
  ]

}
