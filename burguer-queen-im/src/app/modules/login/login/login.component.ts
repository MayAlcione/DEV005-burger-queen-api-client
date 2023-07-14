import { Component, OnInit } from '@angular/core'; // Core module
import { Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({ //decorador
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    private fb: FormBuilder,
    public router: Router,
    ) {}

// Formulario reactivo
  loginForm = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(5)]]
  });

//Variable para guardar los mensajes de error dependiendo la respuesta del Api
messageErrorPassword:String = '';
messageErrorEmail:String='';

//Variables para mostrar y ocultar el error de la respuesta al Api
showErrEmail:boolean=false;
showErrPassword:boolean=false;

//Función que se activa al dar click al botón 'Iniciar sesión'
  saveAuth() {
  // Petición a la Api para Auth
    if(this.loginForm.valid){
      this.loginService.getAuth(this.loginForm.value)
      .subscribe({
        next: (data) => {
          //localStorage
            localStorage.setItem('Token', data.accessToken)
            localStorage.setItem('User', data.user.id)
            localStorage.setItem('Role', data.user.role)

          //Navegación a las vistas según la credencial
          if(data.user.role === 'Administrador'){
            this.router.navigate(['/admin'])
          }else if(data.user.role === 'Mesero' || data.user.role === 'Mesera'){
            this.router.navigate(['/waiter'])
          }else if(data.user.role === 'Cocinero' || data.user.role === 'Cocinera'){
            this.router.navigate(['/chef'])
          }
        },
        error: (err) => {
          if(err.error==='Incorrect password'){
            this.messageErrorPassword='Contraseña incorrecta'
            this.showErrPassword=true;
          }else{
            this.messageErrorEmail='Usuario no registrado';
            this.showErrEmail=true;
          }
        }
      });
    }
  }

//Función que se ejecuta al cargar la página
  ngOnInit() {
  }

//Mostrar y ocultar contraseña
  showPassword = false;
  toggleShow() {
    this.showPassword = !this.showPassword;
  }
}
