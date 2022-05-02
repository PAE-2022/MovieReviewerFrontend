import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

export interface Movie {
  name: string;
  director: string;
  genre: string;
  poster:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  movieCtrl = new FormControl();
  filterMovies: Observable<Movie[]>;
  public sort: string | undefined;

  movies: Movie[] = [
    {
      name: 'Arkansas',
      director: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      genre:"" ,
      poster:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'Arkansas',
      director: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      genre:"" ,
      poster:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'Arkansas',
      director: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      genre:"" ,
      poster:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'Arkansas',
      director: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      genre:"" ,
      poster:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    }
  ];
  constructor() { 
    this.filterMovies = this.movieCtrl.valueChanges.pipe(
      startWith(''),
      map(movie => (movie ? this._filterMovies(movie) : this.movies.slice())),
    );
  }

  private _filterMovies(value: string): Movie[] {
    const filterValue = value.toLowerCase();

    return this.movies.filter(movie => movie.name.toLowerCase().includes(filterValue));
  }
  }

