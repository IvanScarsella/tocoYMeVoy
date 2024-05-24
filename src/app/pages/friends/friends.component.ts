import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
// import friend1 from '../../../assets/friend1.png';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [NavbarComponent, RouterLink, RouterOutlet],
  templateUrl: './friends.component.html',
  styles: ``
})
export class FriendsComponent {

  friendsList: any[] = [
    { image: '../../../assets/friend1.png', name: 'Julián Baldaro' },
    { image: '../../../assets/friend2.png', name: 'Sofía Amarilla' },
    { image: '../../../assets/friend3.png', name: 'Iván Riquelme' },
    { image: '../../../assets/friend4.png', name: 'Fernando Marín' },
  ]

}
