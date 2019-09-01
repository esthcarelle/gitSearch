import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {Github} from './github'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  constructor(private http:HttpClient) {
   
   }
  
  private user:string="esthcarelle";
    getProfileInfo(){
    return  this.http.get('https://api.github.com/users/' + this.user+ '?client_id=' + environment.clientId +'&client_secret='+ environment.clientpassword );
   }
   getProfileRepos(){
    return  this.http.get('https://api.github.com/users/' + this.user+ '/repos?client_id=' + environment.clientId +'&client_secret='+ environment.clientpassword );
   
   }
   getName(user:string){
this.user=user;
   }
 
}
