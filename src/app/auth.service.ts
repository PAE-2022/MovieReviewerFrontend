import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(readonly router:Router) { }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token')!;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getUserId() {
    var profile = jwtDecode(this.getToken()) as any;
    return profile.id as string;
  }
  redirectGuard(){
    if (!this.isLoggedIn()){
      this.router.navigate(['/login'])
    }

  }
}
