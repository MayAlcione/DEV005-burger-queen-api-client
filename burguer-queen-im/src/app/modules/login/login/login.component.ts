import { Component, OnInit } from '@angular/core'; // Core module
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({ //decorador
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  get f() { return this.loginForm.controls; }
  preview: string = '';

  save() {
    if(this.loginForm.valid){
      this.preview = JSON.stringify(this.loginForm.value);
    }
  }
  constructor(public loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getAuth().subscribe((data) => {
      console.log(data);

    });;
  }
}
// export class LoginComponent {

// }
