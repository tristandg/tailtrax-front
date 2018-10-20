import {Injectable} from '@angular/core';
import {HttpService} from './http-service';
import {Message} from '../models/Message';
import {Conversation} from '../models/conversation';

@Injectable()
export class MessagingService {

  messagesUrl = 'direct_messages';

  constructor(private http: HttpService) { }

  // Return all direct messages
  // getAllMessages(): Promise<Message[]> {
  //   return this.http.get(this.messagesUrl + '/getAll')
  //     .toPromise()
  //     .catch(this.handleError);
  // }
  //
  // Return all direct messages belonging to logged in user
  // getAllUserMessages(): Promise<Message[]> {
  //   return this.http.get(this.messagesUrl)
  //     .toPromise()
  //     .catch(this.handleError);
  // }

  // Get all messages in a conversation
  getConversation(conversation: Conversation): Promise<Conversation> {
    const url = `${this.messagesUrl}/conversation/${conversation.id}`;
    return this.http.get(url)
      .toPromise()
      .catch(this.handleError);
  }

  // Get all conversations for current user
  getUserConversations() {
    return this.http.get(this.messagesUrl + '/my-conversations')
      .toPromise()
      .catch(this.handleError);
  }

  // Create a direct associated to logged in user
  createMessage(message: Message): Promise<Message> {
    return this.http.post(this.messagesUrl, JSON.stringify(message))
      .toPromise()
      .catch(this.handleError);
  }

  createConversation(user_id: number): Promise<Conversation> {
    return this.http.post(this.messagesUrl + '/new-conversation', JSON.stringify({user_id}))
      .toPromise()
      .catch(this.handleError);
  }

  // Update a direct message associated to logged in user
  updateMessage(message: Message): Promise<Message> {
    return this.http.put(this.messagesUrl + '/' + message.id.toString(), JSON.stringify(message))
      .toPromise()
      .catch(this.handleError);
  }

  // Deletes a specific direct message
  deleteMessage(message: Message): Promise<boolean> {
    const url = `${this.messagesUrl}/${message.id}`;
    return this.http.delete(url)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
