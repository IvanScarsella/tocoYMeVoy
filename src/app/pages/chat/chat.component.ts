import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NavbarComponent, RouterLink, RouterOutlet],
  templateUrl: './chat.component.html',
  styles: ``
})
export class ChatComponent {

  contactsList: any[] = [
    { image: '../../../assets/profile2.jpg', name: 'Brenda Quiroga', lastMessage: 'Coordina con tu nuevo compañero', read: true },
    { image: '../../../assets/friend3.png', name: 'Iván Riquelme', lastMessage: 'Dale dale, nos vemos!!', read: false },
    { image: '../../../assets/friend2.png', name: 'Sofía Amarilla', lastMessage: 'Visto el domingo', read: false },
    { image: '../../../assets/friend1.png', name: 'Julián Baldaro', lastMessage: 'Coordina con tu nuevo compañero', read: true },
    { image: '../../../assets/friend5.png', name: 'Marcelo Peralta', lastMessage: 'Coordina con tu nuevo compañero', read: true },
  ]

  private _router = inject(Router)

  navigate(friend: string): void {
    console.log(friend)
    this._router.navigate(['/chat', friend])
  }

}
