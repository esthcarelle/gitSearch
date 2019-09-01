import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import {GitserviceService} from './gitservice.service'
import { FormsModule } from '@angular/forms';
import { ReadMoreComponent } from './read-more/read-more.component';
import { DatePipe } from './date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ReadMoreComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
