import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import moviesJson from '../../../movies.json'

interface movie {
    Title:string; 
    Year:string; 
    Rated:string;
    Released:string; 
    Runtime:string;
    Genre:string;
    Director:string;
    Writer:string;
    Actors:string; 
    Plot:string;
    Language:string;
    Country:string; 
    Awards:string; 
    Poster:string; 
    Metascore:string; 
    imdbRating:string; 
    imdbVotes:string
    imdbID:string;
    Type:string; 
    Response:string; 
    Images:Array<string>; 
  }


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  public movies: movie[] = moviesJson;
  constructor() { 

  }


  }

