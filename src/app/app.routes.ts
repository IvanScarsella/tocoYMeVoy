import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MissingOneListComponent } from './pages/missing-one-list/missing-one-list.component';
import { GamesComponent } from './pages/games/games.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { FriendChatComponent } from './pages/friend-chat/friend-chat.component';
import { GameAplicationComponent } from './pages/game-aplication/game-aplication.component';
import { MissingOneAplicationComponent } from './pages/missing-one-aplication/missing-one-aplication.component';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';

export const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'user-register', component: UserRegisterComponent },
   { path: 'home', component: HomeComponent },
   { path: 'chat', component: ChatComponent },
   { path: 'chat/:name', component: FriendChatComponent },
   { path: 'profile', component: ProfileComponent },
   { path: 'profileView', component: ProfileViewComponent },
   { path: 'missingOneList', component: MissingOneListComponent },
   { path: 'missingOneList/:id', component: MissingOneAplicationComponent },
   { path: 'games', component: GamesComponent },
   { path: 'games/:id', component: GameAplicationComponent },
   { path: 'friends', component: FriendsComponent },
   { path: 'createGame', component: CreateGameComponent },
   { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
