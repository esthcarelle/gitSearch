import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ReadMoreComponent } from './read-more/read-more.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'readmore', component: ReadMoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
