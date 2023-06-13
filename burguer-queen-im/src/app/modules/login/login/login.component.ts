import { Component, OnInit } from '@angular/core'; // Core module
import { Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({ //decorador
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    private fb: FormBuilder
    ) {}
// Formulario reactivo
  loginForm = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required]]
  });

  saveAuth() {
    if(this.loginForm.valid){
      this.loginService.getAuth(this.loginForm.value).subscribe((data) => {
        console.log(data);
      });;
    }
  }
// Petición a la Api para Auth
  ngOnInit() {
  }

//Mostrar u ocultar contraseña
  showPassword = false;
  toggleShow() {
    this.showPassword = !this.showPassword;
  }
}
