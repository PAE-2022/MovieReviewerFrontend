import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/api/services';
import { Movie } from 'src/app/api/models';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  movies: Movie[] = [];
  constructor(readonly moviesService: MoviesService ) { 

  }
  ngOnInit(){
    this.getAllMovies();
  }
  getAllMovies(){
    this.moviesService.apiMoviesGet().subscribe((movies) =>{
      this.movies = movies;
    });
  }
}