import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { NotificationsService } from './notifications.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Movie Reviewer';
  userId:string | any;

  notificationObservable: Subscription | undefined;

  constructor(private readonly authService: AuthService,
    private router:Router,
    private notificationsService: NotificationsService,
    private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.getUserId();

    this.authService.$onLoggedIn.subscribe((userId) => {
      if (this.notificationObservable) {
        this.notificationObservable.unsubscribe();
      }
      if (userId) {
        this.notificationObservable = this.notificationsService
          .onFollower(userId)
          .subscribe((notif) => {
            this._snackBar.open(notif.message, 'Ok', {
              duration: 2000,
            });
        });
      }
    })
  }
  public logout(): void {
    this.authService.logout();
  }

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  goToMyProfile(){
    this.router.navigate(['/profile', this.userId])
    .then(() => {
    window.location.reload();
  });



  }

  getUserId(){
    this.userId = this.authService.getUserId()
  }
}

