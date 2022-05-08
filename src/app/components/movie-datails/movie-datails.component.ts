import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { IMovie } from 'src/app/services/movies.service';
@Component({
  selector: 'app-movie-datails',
  templateUrl: './movie-datails.component.html',
  styleUrls: ['./movie-datails.component.css']
})
export class MovieDatailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,readonly moviesService: MoviesService) { }
  id: string | any;
  movie!: IMovie;
  ngOnInit(): void {
    this.route.params.subscribe( params =>
        this.id = params['id']
    )
    this.getMovieById();
  }
  getMovieById(){
    this.moviesService.getMovieById(this.id).subscribe(movie =>{
      this.movie = movie;
    })
  }
}
