import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ChatService } from '../../services/chat-service.service';
import { Chat } from '../../models/chat.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-friend-chat',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, RouterLink],
  templateUrl: './friend-chat.component.html',
  styles: ``
})
export class FriendChatComponent implements OnInit {

  public chat?: Chat
  public messages?: any[] = []
  public friendMessages?: string[]
  public userMessages?: string[]

  private _route = inject(ActivatedRoute)
  private _chatService = inject(ChatService)

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.chat = this._chatService.getChat(params['name'])[0]
    })
    if (this.chat) {
      for (let i = 0; i < this.chat.userMessages.length; i++) {
        let newObject = {
          text: this.chat.userMessages[i].text,
          dateTime: this.chat.userMessages[i].dateTime,
          user: true
        }
        this.messages?.push(newObject)
      }
      for (let i = 0; i < this.chat.friendMessages.length; i++) {
        let newObject = {
          text: this.chat.friendMessages[i].text,
          dateTime: this.chat.friendMessages[i].dateTime,
          user: false
        }
        this.messages?.push(newObject)
      }
    }
    this.messages?.sort((a: any, b: any) => {
      const dateA: any = new Date(a.dateTime);
      const dateB: any = new Date(b.dateTime);
      return dateA - dateB;
    });
    console.log(this.messages)
  }

}
