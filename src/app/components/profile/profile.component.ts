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
  //usuario del perfil visible
  profileId!:string;
  profileUser: User | undefined;

  //usuario en sesion
  userId:string | any;
  user: User | undefined;
  myProfile!:boolean;

  constructor(private route: ActivatedRoute, private readonly authService:AuthService, private readonly userService:UsersService, protected sanitizer: DomSanitizer,  private router: Router) { }

  ngOnInit(): void {
    //redirecciona si no esta logged in
    this.authService.redirectGuard();

    //obtiene el id del usuario del perfil visible
    this.route.params.subscribe( params =>
      this.profileId = params['id']
  )
  //obtiene el id del usuario en sesion 
    this.getUser();

  //obtiene el usuario del perfil visible
    this.getProfileUser();

  //inhabilita el boton de editar perfil
    if(this.profileId === this.userId){
      this.myProfile=true
    }else{
      false;
    }
  }
  goToProfile(id:string | undefined){
    this.router.navigate(['profile/',id])
    .then(() => {
    window.location.reload();
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
  getUser(){
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


  searchFriend(friend : string) {
    //console.log(friend)
    this.userService.apiUsersSearchGet({
      query: friend
    }).subscribe({
      next: (res) => {
        console.log(res[0]._id)
        this.userService.apiUsersFollowersPost({
          body: {
            userId: res[0]._id
          }
        }).subscribe({
          next: () => {
            alert("Friend added")
          },
          error: (err) => {
            alert(err.error.message);
          }
        })
      },
      error: (err) => {
        alert(err.error.message);
      }
    })
  }



}