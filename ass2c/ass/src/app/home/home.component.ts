import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private router : Router) { }
  
  ngOnInit(): void {
    
  }

  loginComponent() {
    this.router.navigate(['login']);
  }

  registerComponent() {
    this.router.navigate(['register']);
  }

}
