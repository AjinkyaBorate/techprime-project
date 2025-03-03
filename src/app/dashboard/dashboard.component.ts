import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router:Router){

  }
  navigateToCreateProject() {
    this.router.navigate(['/create-project']);
  }
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  navigateToListingPage() {
    this.router.navigate(['/listing-page']); 

  }
}
