import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MoviesService } from 'src/app/api/services';
import { Movie } from 'src/app/api/models';

@Component({
  selector: 'app-movie-datails',
  templateUrl: './movie-datails.component.html',
  styleUrls: ['./movie-datails.component.css']
})
export class MovieDatailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,readonly moviesService: MoviesService) { }
  id: string | any;
  movie !:  Movie;

  ngOnInit(): void {
    this.route.params.subscribe( params =>
        this.id = params['id']
    )
    this.getMovieById();
  }
  getMovieById(){
    this.moviesService.apiMoviesIdGet({
      id: this.id,
    }).subscribe((movie) => {
      this.movie = movie;
    });
  }
}
