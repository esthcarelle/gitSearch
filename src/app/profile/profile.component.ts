import { Component, OnInit } from '@angular/core';
import {GitserviceService} from '../gitservice.service'
import{Github} from '../github'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
 
  user:string
 
profile;
repos;
  constructor(private profilee:GitserviceService) {
   
   }
findPro(){
  this.profilee.getName(this.user)
  this.profilee.getProfileInfo().subscribe(profile=>{
    this.profile=profile;
  });
  this.profilee.getProfileRepos().subscribe(repos=>{
   this.repos=repos;
  })
}
  ngOnInit() {
  }

}
