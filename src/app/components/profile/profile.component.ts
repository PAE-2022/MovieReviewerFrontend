import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {  UsersService } from 'src/app/api/services';
import { Movie, User } from 'src/app/api/models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId:string | any;
  user: User | undefined;
  

  constructor(private readonly authService:AuthService, private readonly userService:UsersService, protected sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getUserId();


  }
  getUserId(){
    this.userId = this.authService.getUserId()
    this.userService.apiUsersIdGet({
      id:this.userId,
    }).subscribe((user)=>{
      this.user = user;
    });
  }
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}