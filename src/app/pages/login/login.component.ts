import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  buttonText: string = 'Ingresar'
  buttonText2: string = 'Registrarse'
}
