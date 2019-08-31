import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {Github} from './github'


@Injectable({
  providedIn: 'root'
})
export class GitserviceService {

  private user:string;
  private clientId:'364fb8f9a5cada030543';
  private clientpassword:'7eb68359515222df8cf85f76a79eab5de3c21cb3';
  getProfileInfo(){
    return  this.http.get('https://api.github.com/users/' + this.user+ '?client_id=' + this.clientId +'&client_secret='+ this.clientpassword );
   }
   getProfileRepos(){
    return  this.http.get('https://api.github.com/users/' + this.user+ '/repos?client_id=' + this.clientId +'&client_secret='+ this.clientpassword );
   
   }
   getName(user:string){
this.user=user;
   }
  constructor(private http:HttpClient) {
    this.user='esthcarelle';
   }
  
}
