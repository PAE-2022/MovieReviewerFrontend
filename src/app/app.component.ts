import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Movie Reviewer';
  constructor(private readonly authService: AuthService) { }
  
  public logout(): void {
    this.authService.logout();
  }

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}

