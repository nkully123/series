import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { CharecterComponent } from '../charecter/charecter.component';
import { DetailService } from '../detail.service';
import { GetServiceService } from '../getService.service';
import { SelectedComponent } from '../selected/selected.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit 
{

  characters:any[];
  refinedCharacterInfo:any[];
  @ViewChild('basicModel') modal;
  modalRef: MDBModalRef;
  constructor(private detailService:DetailService,private selected:GetServiceService, private router: Router,
    private modalService:MDBModalService ) { }
  
  ngOnInit(): void 
  {
    this.detailService.get().subscribe((detail:any)=>{
      this.characters = detail;
      console.log(this.characters)


      for (let index = 0; index < this.characters.length; index++){
        this.refinedCharacterInfo = this.characters[index];
        
      }
      
    })
  }

  openModal() {
    
  }
  
  // selectCharecter(cast:any){
  //   this.selected.getSelectedCharacter(cast)

  //   this.router.navigate(['/selected'])

  // }
  
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
  
  
  
 

  
  
}
