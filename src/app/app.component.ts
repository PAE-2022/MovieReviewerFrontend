import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Movie Reviewer';
  public isAuthenticated = true;

  constructor(){

  }
  //MOVIES


  public logout(): void {
    
  } 
}

