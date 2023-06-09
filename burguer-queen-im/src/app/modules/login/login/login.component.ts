import { Component, OnInit } from '@angular/core'; // Core module
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { LoginService } from 'src/app/service/login.service';

@Component({ //decorador
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor() {}

  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  get f() { return this.loginForm.controls; }
  preview: string = '';

  ngOnInit(): void{}

  save() {
    if(this.loginForm.valid){
      this.preview = JSON.stringify(this.loginForm.value);
    }
  }
  // users: any;
  // constructor(public loginService: LoginService) {}

  // ngOnInit() {
  //   this.loginService.getUsers().subscribe((data) => {
  //     this.users = data;
  //     console.log('hhhh', this.users)
  //   });;
  // }
}
// export class LoginComponent {

// }
