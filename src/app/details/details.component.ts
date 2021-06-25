import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { CharecterComponent } from '../charecter/charecter.component';
import { DetailService } from '../detail.service';
import { GetServiceService } from '../getService.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit 
{
  
  foundedData:any[];
  charIndex:number;
  characters:any[];
  selectedCharecter:any;
  refinedCharacterInfo:any[];
  @ViewChild('basicModel') modal;
  modalRef: MDBModalRef;

  searchForm: any = new FormGroup({
    "name": new FormControl('')
  })

  constructor(private detailService:DetailService,private selected:GetServiceService, private router: Router,
    private modalService:MDBModalService ) { }
  
  
  ngOnInit(): void 
  {
    this.detailService.get().subscribe((detail:any)=>{
      this.characters = detail;
      console.log(this.characters)      
    })
  }

  
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";

  }
  openModel(characters){
    this.selected.getSelectedCharacter(characters)
    this.modalRef = this.modalService.show(CharecterComponent);
  }
  submit1()
  {

      this.detailService.serchingPerson(this.searchForm.value).subscribe((charact:any)=>
      {
        this.foundedData = charact
        this.selected.setFounder(this.foundedData);
      })
     
  }
 

  
  
  }
