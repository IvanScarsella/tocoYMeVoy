import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MissingOneListComponent } from './pages/missing-one-list/missing-one-list.component';
import { GamesComponent } from './pages/games/games.component';
import { FriendsComponent } from './pages/friends/friends.component';

export const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'user-register', component: UserRegisterComponent },
   { path: 'home', component: HomeComponent },
   { path: 'chat', component: ChatComponent },
   { path: 'profile', component: ProfileComponent },
   { path: 'missingOneList', component: MissingOneListComponent },
   { path: 'games', component: GamesComponent },
   { path: 'friends', component: FriendsComponent },
   { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
