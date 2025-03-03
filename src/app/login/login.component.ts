import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myform!: FormGroup;
  uname: string = "ab@gmail.com";
  pass: string = "123";

  constructor(private fb: FormBuilder, private router: Router) { 
    this.myform = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get username() { return this.myform.get('username'); }
  get password() { return this.myform.get('password'); }

  onSubmit() {
    if (this.myform.valid) {
      const { username, password } = this.myform.value;
      
      if (username === this.uname && password === this.pass) {
        this.router.navigate(['/create-project']); 
      } else {
        alert('Invalid Credentials');
      }
    }
  }
}
