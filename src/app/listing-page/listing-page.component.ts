import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Createproject } from '../create-project/createproject.dto';
import { ListingPageServiceService } from './listing-page-service.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-listing-page',
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './listing-page.component.html',
  styleUrl: './listing-page.component.css'
})
export class ListingPageComponent implements OnInit{
  projects: any[] = [];
  status: string="Registered";

  constructor(private projectService: ListingPageServiceService,private router:Router) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
  navigateToSamePage() {
    this.router.navigate(['/create-project']);
  }
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  
}
