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

  constructor(private detailService:DetailService) { }
  
  ngOnInit(): void 
  {
    this.detailService.get().subscribe((detail:any)=>{
      this.characters = detail;
      console.log(this.characters)
    })
    
  }
  

}
