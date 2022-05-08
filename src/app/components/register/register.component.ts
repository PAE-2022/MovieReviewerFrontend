import { Component, OnInit } from '@angular/core';
import { CreateUserDto } from 'src/app/api/models';
import { UsersService } from 'src/app/api/services';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html', 
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl('email', {
      validators: [
        Validators.required,
        Validators.email,
      ],
    }),
    name: new FormControl('name', {
      validators: [
        Validators.required,
      ],
    }),
    password: new FormControl('password', {
      validators: [
        Validators.required,
        Validators.minLength(6),
      ],
    }),
    dateOfBirth: new FormControl('dateOfBirth', {
      validators: [
        Validators.required,
      ],
    }),
  });

  constructor(private readonly userService: UsersService) { }

  ngOnInit(): void {
  }

  private createUser(data: CreateUserDto){
    this.userService.apiUsersSignupPost({body:data}).subscribe(()=>{
      alert('User created');
    }, (error) => {
      if (error.error.errors) {
        error.error.errors.forEach((element: any) => {
          alert(JSON.stringify(element));
        });
      }
    })
  }

  onSubmitForm() {
    if (!this.signupForm.valid) {
      return;
    }
    const data: CreateUserDto = this.signupForm.value;
    this.createUser(data);
  }

}
