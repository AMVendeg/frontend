import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  user: User = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    isAdmin: false
  };
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  

  saveUser(): void {
    const data = {
      email: this.user.email,
      password: this.user.password,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      isAdmin: this.user.isAdmin
    };

    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      isAdmin: false
    };
  }
}