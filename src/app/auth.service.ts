import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

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
}
