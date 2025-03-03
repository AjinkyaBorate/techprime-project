import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Createproject } from './createproject.dto';

@Injectable({
  providedIn: 'root'
})
export class CreateprojectserviceService {

  
  url:string="http://localhost:3000/plist";

  constructor(private http:HttpClient) { }

    getAddProject():Observable<any>
    {
      return this.http.get<any>(this.url)
    }

    addproject(p:Createproject):Observable<any>
    {
         return this.http.post<any>(this.url,p)
    }

    deleteProject(id:number):Observable<any>
    {
      return this.http.delete<any>(this.url+"/"+id)
    }

     updateProject(p:Createproject):Observable<any>
     {
        return this.http.put<any>(this.url+"/"+p.id,p)
     }


}