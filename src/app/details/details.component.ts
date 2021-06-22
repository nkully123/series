import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';

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






  constructor(private detailService:DetailService) { }
  
  ngOnInit(): void 
  {
    this.detailService.get().subscribe((detail:any)=>{
      this.characters = detail;
      console.log(this.characters)


      for (let index = 0; index < this.characters.length; index++) 
      {
        this.refinedCharacterInfo = this.characters[index];
        
      }
      
    })
  }
  
  selectCharecter(cast:any){
    console.log(cast);
    this.selectedCharecter =cast;
  }
  
}
