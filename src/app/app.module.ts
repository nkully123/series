
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';

import { SelectedComponent } from './selected/selected.component';
import { GetServiceService } from './getService.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CharecterComponent } from './charecter/charecter.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    SelectedComponent,
    SelectedComponent,
    CharecterComponent,
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
  bootstrap: [AppComponent],
  entryComponents:[SelectedComponent,CharecterComponent]
})
export class AppModule { }
