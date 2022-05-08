import { Component, OnInit } from '@angular/core';
import { CreateUserDto } from 'src/app/api/models';
import { UsersService } from 'src/app/api/services';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html', 
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl('email'),
    name: new FormControl('name'),
    password: new FormControl('password'),
    dateOfBirth: new FormControl('dateOfBirth'),
  });

  constructor(private readonly userService: UsersService) { }

  ngOnInit(): void {
  }

  private createUser(data: CreateUserDto){
    this.userService.apiUsersSignupPost({body:data}).subscribe(()=>{
      alert('User created');
    })
  }

  onSubmitForm() {
    const data: CreateUserDto = this.signupForm.value;
    this.createUser(data);
  }

}
