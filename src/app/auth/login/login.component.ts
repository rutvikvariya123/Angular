import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatonService } from 'src/app/sheard/services/authenticaton.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submited = false
  
  loginForm:FormGroup;
  constructor(private userServices: AuthenticatonService, private router:Router) {
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(6)]),
    })
   }

  ngOnInit(): void {
  }
  
  get getControl() {
    return this.loginForm.controls; 
  }

  loginData(){
    this.submited = true
    if(this.loginForm.valid){
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;

        this.userServices.getData().subscribe((data) => {
            const allData = data as { id: string, uname: string, email: string, password: string }[]; 
            const user = allData.find(user => user.email === email && user.password === password);
            if(user) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                this.loginForm.reset();
                // encrypt email and password
                const encodedEmail = this.userServices.encode(email);
                const encodedPassword = this.userServices.encode(password);
                const holdata = encodedEmail + encodedPassword
                localStorage.setItem('loginData', holdata);
                localStorage.setItem('isLoggedIn','true');
                this.router.navigate(['/reactiveform']);
              } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Invalid email or password",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
          this.submited = false;
        });
    }
}
}
