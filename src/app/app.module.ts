
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { SelectedComponent } from './selected/selected.component';
import { GetServiceService } from './getService.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
=======
import { SerchComponent } from './serch/serch.component';
>>>>>>> 57b7f542b7b3ca84fdbfd9dc988b14d7ca5de21e


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
<<<<<<< HEAD
    SelectedComponent,
    
=======
    SerchComponent,
>>>>>>> 57b7f542b7b3ca84fdbfd9dc988b14d7ca5de21e
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    GetServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
