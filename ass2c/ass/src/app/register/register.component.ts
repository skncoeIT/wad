import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  form!: FormGroup;
  submitted = false;
  loading = false;
  constructor(private router: Router, private authService: AuthService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      gender: [''],
      branch: [''],
    })
  }
  register() {
    this.submitted = true;
    this.loading = true;
    if (this.authService.registerUser(this.form.value)) {
      alert("User Register Successful");
      this.router.navigate(['login']);
    }
    else {
      alert("Registration Failed");
    }
  }


}
