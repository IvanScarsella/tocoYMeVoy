import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-create-game',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [NavbarComponent, RouterLink, RouterOutlet, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule],
  templateUrl: './create-game.component.html',
  styles: ``
})
export class CreateGameComponent {

}
