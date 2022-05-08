import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { IMovie } from './services/movies.service';

export interface IUser{
  email: string;
  password: string;
  name: string;
  dateOfBirth: Date;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  following: IUser[] | string[];
  //favorites: IMovie[] | string[];

  isValidPassword(password: string): Promise<boolean>;
}



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  URL = `http://localhost:3000/api/users/`
  constructor(private http: HttpClient) {


   }
   getUserById(id:string){
     return this.http.get<IUser>(`${this.URL}`+ id)
      
  }
}
