
import { LoginService } from './../zillbugservice.service';
import { Component, OnInit } from '@angular/core';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logined=false
  private login_error=false;
  public status;
  public server_error=false;

  constructor(private apiservice:LoginService,private route:Router) {
   }

  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      this.route.navigate(['/home'])
    }
  }
onClickLogin(form_data){
  let data ={"username":form_data.username,"password":form_data.password}
  this.apiservice.get_api_token(data).subscribe(
    data=>{
      console.log(data)
      if (data.hasOwnProperty('token')){
          this.storeCookie(data["token"])
          this.route.navigate(['/home'])
      }else
      {
      
      if (data["error"]["status"]==400){
        this.login_error=true
        this.server_error=false
        console.log(data["error"]["status"])
        return false
      }
      else if(data["error"]["status"]==404 || data["error"]["status"]>=500 ){
this.server_error=true
return false
      }
      else if (data["error"]["status"]==200){
        this.server_error=false
        this.login_error=true
        console.log(data["token"])

      }
      this.server_error=true
      this.login_error=false
      return false
    }
  },
    err=>{
      console.log("error")
      this.server_error=true
      this.login_error=false
      return false
    }
    
  
  );
  
  return false

}
storeCookie(token:string){
  localStorage.setItem('token',token)
}
}
