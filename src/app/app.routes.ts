import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';

export const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'user-register', component: UserRegisterComponent },
   { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
