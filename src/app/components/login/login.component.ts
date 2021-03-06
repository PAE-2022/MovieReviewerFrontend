import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { UsersService } from 'src/app/api/services';
import { AuthService } from 'src/app/auth.service';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', {
      
      validators: [
        Validators.required,
        Validators.email,
      ]}),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
      ],
    }),
  });
  
  constructor(private readonly usersService: UsersService, private readonly authService: AuthService,private router: Router) { }

  ngOnInit(): void { 
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    this.usersService.apiUsersLoginPost({
      body: {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      },
    }).subscribe({
      next: (response) => {
        this.authService.setToken(response.token!);
        alert('Login successful');
        this.navigate();
      },
      error: (error) => {
        if (error.error.errors) {
          error.error.errors.forEach((element: any) => {
            alert(JSON.stringify(element));
          });
        } else {
          alert(JSON.stringify(error.error));
        }
    }});
  }

  navigate(){
    this.router.navigate([''])
  }
}
