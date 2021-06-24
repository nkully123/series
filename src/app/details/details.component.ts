import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  

  characters:any[];
  selectedCharecter:any;
  refinedCharacterInfo:any[];
  nameToSearch:any;
  foundedData:any[];
  selectedChar:any[];

  searchForm: any = new FormGroup({
    "name": new FormControl('')
  })

  constructor(private detailService:DetailService,private selected:GetServiceService, private router: Router ) { }
  
  
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
  
  selectCharecter(cast:any){
    this.selected.getSelectedCharacter(cast)

    this.router.navigate(['/selected'])

  }
  
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  

  submit1()
  {
     
      this.detailService.serchingPerson(this.searchForm.value).subscribe((detail:any)=>{
      this.foundedData = detail;
      console.log(detail);
      this.searchForm.reset();

    })
  }
  
  
 
  
  
  
}
