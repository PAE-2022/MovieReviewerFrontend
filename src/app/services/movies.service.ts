import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IPlatform {
  name: string;
  url: string;
}
export interface IMovieReviewScore {
  score: number;
  user: string;
}
export interface Movie {
  name: string;
  cover: string;
  synopsis: string;
  trailer: string;
  scores: IMovieReviewScore[];
  score: number;
  releaseDate: Date;
  platforms: IPlatform[];
  screenwriters: string[];
  cast: string[];
  genres: string[];
  comments: Comment[];

  createdAt: Date;
  updatedAt: Date;
}




@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  URL = `http://localhost:3000/api/movies/`
  
  constructor(private http: HttpClient) { }
  
  getAllMovies(){
    return this.http.get< Movie[] | {} >(`${this.URL}`)
  }

  getMovieById(id:string){
    this.http.get< Movie | {} >(`${this.URL}` + id )
  }


}
