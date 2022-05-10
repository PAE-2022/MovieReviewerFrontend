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
  user!: User;
  isFavorite!: boolean;
  favMovies: Movie []|undefined;
  constructor(private route: ActivatedRoute,readonly moviesService: MoviesService, protected sanitizer: DomSanitizer,private readonly authService:AuthService,private readonly userService:UsersService) { }


  ngOnInit(): void {
    this.route.params.subscribe( params =>
        this.id = params['id']
    )
    this.getMovieById();
    this.getUserId();
    this.toggleIsFavorite()
  }

  getUserId(){
    this.userId = this.authService.getUserId()
    this.userService.apiUsersIdGet({
      id:this.userId,
    }).subscribe((user)=>{
      this.user = user;
  
    });
  }

  //get movie 
  getMovieById(){
    this.moviesService.apiMoviesIdGet({
      id: this.id,
    }).subscribe((movie) => {
      this.movie = movie;
    });
  }
  //add and remove this movie to favorites 
  private addToFavorites(data:AddToFavoritesDto){
    this.userService.apiUsersFavoritesPost({body:data}).subscribe(()=>{
      
    });
  }
  onAddToFavorites(id:string) {
    const data:AddToFavoritesDto = {};
    data.movieId = id;
    this.addToFavorites(data);
    this.toggleIsFavorite();
  }

  private removeFromFavorites(id:string){
    this.userService.apiUsersFavoritesIdDelete({id:id}).subscribe(()=>{
    });
  }
  onRemoveFromFavorites(id:string) {
    const movieId:string =  id;
    this.removeFromFavorites(movieId);
    this.toggleIsFavorite();
  }

  toggleIsFavorite(){
      this.favMovies = this.user.favorites;
      console.log(this.favMovies);
      if(this.favMovies){
      this.favMovies.some((el) =>{
        if (el._id ===this.id){
          this.isFavorite=true;
        }
        else{
          this.isFavorite=false;
        }
      }
      )

  }
  console.log(this.isFavorite);}
  moviePlatform(movie: Movie): string[] {
    return movie.platforms!.map((platform) => platform.name!);
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getComments(movie: Movie): string[] {
    return movie.comments!.map((comment) => comment.content!);
  }

  postComment(content: string) {
    this.moviesService.apiMoviesIdCommentPost({
      id: this.movie?._id!,
      body: {
        comment: content,
      },
    }).subscribe({
      next: () => {
        // do nothing
      },
      error: (err) => {
        alert(err.error.message);
      }
    })
  }
}
