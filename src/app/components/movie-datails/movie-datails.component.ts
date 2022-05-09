import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MoviesService, UsersService } from 'src/app/api/services';
import { AddToFavoritesDto, Movie, User } from 'src/app/api/models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-movie-datails',
  templateUrl: './movie-datails.component.html',
  styleUrls: ['./movie-datails.component.css']
})


export class MovieDatailsComponent implements OnInit {
  id: string | any;
  movie: Movie | undefined;
  userId:string | any;
  user: User | undefined;
  isFavorite!: boolean;
  constructor(private route: ActivatedRoute,readonly moviesService: MoviesService, protected sanitizer: DomSanitizer,private readonly authService:AuthService,private readonly userService:UsersService) { }


  ngOnInit(): void {
    this.route.params.subscribe( params =>
        this.id = params['id']
    )
    this.getMovieById();
    this.getUserId();
    this.isFavorite=false;
  }
  getMovieById(){
    this.moviesService.apiMoviesIdGet({
      id: this.id,
    }).subscribe((movie) => {
      this.movie = movie;
    });
  }

  getUserId(){
    this.userId = this.authService.getUserId()
    this.userService.apiUsersIdGet({
      id:this.userId,
    }).subscribe((user)=>{
      this.user = user;
    });
  }

  private addToFavorites(data:AddToFavoritesDto){
    this.userService.apiUsersFavoritesPost({body:data}).subscribe(()=>{
      
    });
  }
  onAddToFavorites(id:string) {
    const data:AddToFavoritesDto = {};
    data.movieId = id;
    this.addToFavorites(data);
    this.isFavorite=true;
  }

  private removeFromFavorites(id:string){
    this.userService.apiUsersFavoritesIdDelete({id:id}).subscribe(()=>{
    });
  }
  onRemoveFromFavorites(id:string) {
    const movieId:string =  id;
    this.removeFromFavorites(movieId);
  }

  moviePlatform(movie: Movie): string[] {
    return movie.platforms!.map((platform) => platform.name!);
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getComments(movie: Movie): string[] {
    return movie.comments!.map((comment) => comment.content!);
  }

  postComment() {
    //this.moviesService.apiMoviesIdCommentPost()
  }
}
