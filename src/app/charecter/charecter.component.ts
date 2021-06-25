import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { GetServiceService } from '../getService.service';

@Component({
  selector: 'app-charecter',
  templateUrl: './charecter.component.html',
  styleUrls: ['./charecter.component.scss']
})
export class CharecterComponent implements OnInit {

  constructor(public modalRef: MDBModalRef,public selected:GetServiceService) { }

  Character :any[];
  ngOnInit(): void {
    
    this.Character  = this.selected.showCharacter() ;
    // 
    console.log(this.Character);
  }

}
