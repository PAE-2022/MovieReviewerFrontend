import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Movie Reviewer';
  userId:string | any;
  constructor(private readonly authService: AuthService, private router:Router) { }
  ngOnInit(): void {
    this.getUserId();
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

