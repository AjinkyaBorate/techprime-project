import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ListingPageComponent } from './listing-page/listing-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,CreateProjectComponent,ListingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Techprime-Project';
}
