import { Component, OnInit } from '@angular/core';
import moviesJson from '../../../movies.json'
import { DomSanitizer } from '@angular/platform-browser';
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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public _DomSanitizationService: DomSanitizer) { }

  ngOnInit(): void {
  }
  public movies: movie[] = moviesJson;
}
