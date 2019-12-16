import { LoginService } from './../zillbugservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user_name;
  group;
  constructor(private route:Router,private service:LoginService) { }

  ngOnInit() {
    if (localStorage.getItem('token')==null){
      this.route.navigate(["/login"])
      
    }
    else{
      this.service.get_user_profile().subscribe(data=>{
        console.log(data)
        if (data.hasOwnProperty("data")){
          
          let first_name=data["data"]["intern_first_name"]
          let last_name=data["data"]["intern_last_name"]
          first_name=first_name.charAt(0).toUpperCase()+first_name.slice(1)
          last_name=last_name.charAt(0).toUpperCase()+last_name.slice(1)
        this.user_name=first_name+" "+last_name
        this.group=data["group"]
        }
        else{
          this.route.navigate(["/login"])
        }
      });
    
    }
  }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }

}
