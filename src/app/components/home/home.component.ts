import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  movies : any = [];
  constructor(readonly moviesService: MoviesService ) { 

  }
  ngOnInit(){
    this.getAllMovies();
  }
  getAllMovies(){
    this.moviesService.getAllMovies().subscribe(movies =>{
      this.movies = movies;
    })
  }

}