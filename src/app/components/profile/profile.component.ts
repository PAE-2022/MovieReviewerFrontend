import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {  UsersService } from 'src/app/api/services';
import { Movie, User } from 'src/app/api/models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileId:string | any;
  profileUser: User | undefined;
  userId:string | any;
  user: User | undefined;
  myProfile!:boolean;

  constructor(private route: ActivatedRoute, private readonly authService:AuthService, private readonly userService:UsersService, protected sanitizer: DomSanitizer,  private router: Router) { }

  ngOnInit(): void {
    this.authService.redirectGuard();
    this.route.params.subscribe( params =>
      this.profileId = params['id']
  )
    this.getUserId();
    this.getProfileUser();
    if(this.profileId === this.userId){
      this.myProfile=true
    }else{
      false;
    }

  }
  getUserId(){
    this.userId = this.authService.getUserId()
    this.userService.apiUsersIdGet({
      id:this.userId,
    }).subscribe((user)=>{
      this.user = user;
    });
  }
  getProfileUser(){
    this.userService.apiUsersIdGet({
      id:this.profileId,
    }).subscribe((user)=>{
      this.profileUser = user;
    });
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  private removeFromFavorites(id:string){
    this.userService.apiUsersFavoritesIdDelete({id:id}).subscribe(()=>{
    });
  }
  onRemoveFromFavorites(id:string | undefined) {
    if(id!=undefined){
      this.removeFromFavorites(id);
    }

  }

}