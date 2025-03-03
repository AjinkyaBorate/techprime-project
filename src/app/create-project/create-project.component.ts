import { CommonModule, formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Createproject } from './createproject.dto';
import { CreateprojectserviceService } from './createprojectservice.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-project',
  imports: [ReactiveFormsModule,FormsModule,CommonModule,RouterLink],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent {

    myform!:FormGroup;
    plist:Createproject [] = [];
    pobj:Createproject = {};
    btnname:string='Save Project';
    status:boolean = false;



    constructor(private fb:FormBuilder,private pservice:CreateprojectserviceService,private router:Router)
    {
      this.myform = this.fb.group({
        pname:['',[Validators.required]],
        reason:['',[Validators.required]],
        type:['',[Validators.required]],
        division:['',[Validators.required]],
        category:['',[Validators.required]],
        priority:['',[Validators.required]],
        department:['',[Validators.required]],
        sdate:['',[Validators.required]],
        edate:['',[Validators.required]],
        location:['',[Validators.required]]



      })
      this.showProjectList();
    }

    get pname ()
    {
      return this.myform.get('pname');
    }

    get reason ()
    {
      return this.myform.get('reason');
    }

    get type ()
    {
      return this.myform.get('type');
    }

    get division ()
    {
      return this.myform.get('division');
    }

    get category ()
    {
      return this.myform.get('category');
    }

    get priority ()
    {
      return this.myform.get('priority');
    }

    get department ()
    {
      return this.myform.get('department');
    }

    get sdate()
    {
      return this.myform.get('sdate');
    }

    get edate ()
    {
      return this.myform.get('edate');
    }

    get location ()
    {
      return this.myform.get('location');
    }

    showProjectList()
    {

         this.pservice.getAddProject().subscribe(result =>{
          this.plist = result;
          console.log(this.plist);
         })

    }

    saveproject()
    {
        if (this.myform.invalid) {
          alert("Please fill all required fields.");
          return;
        }
      
        if (this.btnname == 'Save Project') {
          this.pobj = this.myform.value;
          console.log('Saving project:', this.pobj);
          this.pservice.addproject(this.pobj).subscribe(result => {
            alert('Project saved successfully:')
            console.log('Project saved successfully:', result); 
            this.showProjectList(); 
            this.myform.reset(); 
          }, error => {
            console.error('Error saving project:', error); 
          });
        
        }
    }
    navigateToListingPage() {
      this.router.navigate(['/listing-page']); 

    }
    navigateToSamePage() {
      this.router.navigate(['/create-project']);
    }
    navigateToDashboard() {
      this.router.navigate(['/dashboard']);
    }

}

