import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {

  buttonText: string = 'Ingresar'
  buttonText2: string = 'Registrarse'

  loading: boolean = true

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 1500);
  }
}
