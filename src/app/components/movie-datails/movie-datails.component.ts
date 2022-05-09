import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MoviesService } from 'src/app/api/services';
import { Movie } from 'src/app/api/models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-datails',
  templateUrl: './movie-datails.component.html',
  styleUrls: ['./movie-datails.component.css']
})


export class MovieDatailsComponent implements OnInit {
  id: string | any;
  movie: Movie | undefined;
  constructor(private route: ActivatedRoute,readonly moviesService: MoviesService, protected sanitizer: DomSanitizer) { }


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

  moviePlatform(movie: Movie): string[] {
    return movie.platforms!.map((platform) => platform.name!);
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
