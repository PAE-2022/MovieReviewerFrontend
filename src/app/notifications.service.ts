import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(private socket: Socket) { }

  onFollower(currentUserId: string): Observable<any> {
    return this.socket.fromEvent<any>(`following-${currentUserId}`);
  }
}
