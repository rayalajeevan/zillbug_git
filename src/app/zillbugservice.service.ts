import { Token } from '@angular/compiler';
import { environment } from './../environments/environment.prod';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators'; 
import { of, observable, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'JWT '+localStorage.getItem('token')
    })
  };
  constructor(private http: HttpClient) { 
    
  }
  
  get_api_token(data:any){
    return this.http.post(`${environment.ORG_API}/api/stop/automation`,data).pipe(map((res_data)=>{
      return res_data
    }

    ),
    catchError(error=>{
      return of({'error':error});
      
    }));


    
  }
  get_user_profile(){
    this.httpOptions.headers=this.httpOptions.headers.set("Authorization",'JWT '+localStorage.getItem('token'))
    return this.http.get(`${environment.ORG_API}/userprofile`,this.httpOptions).pipe(map((res_data)=>{
      console.log(res_data)
      return res_data
    }

    ),
    catchError(error=>{
      return of({'error':error});
      
    }));
  }
}
