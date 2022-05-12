import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/api/services';
import { Movie } from 'src/app/api/models';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  movies: Movie[] = [];
  isLogged!: Boolean;
  constructor(readonly moviesService: MoviesService, readonly authService:AuthService, private router: Router) { 

  }
  ngOnInit(){
    this.authService.redirectGuard();
    this.getAllMovies();
  }
  getAllMovies(){
    this.moviesService.apiMoviesGet().subscribe((movies) =>{
      this.movies = movies;
    });
  }

  onSearchChange($event: Event) {
    const searchTerm = ($event.target as HTMLInputElement).value;
    let searchText: string | undefined = undefined;
    if (searchTerm.trim().length > 0) {
      searchText = searchTerm.trim();
    }

    this.moviesService.apiMoviesGet({
      query: searchText,
    }).subscribe({
      next: (movies) => {
        this.movies = movies;
      },
      error: (err) => {
        console.log(err);
      },
    });
      
  }
}