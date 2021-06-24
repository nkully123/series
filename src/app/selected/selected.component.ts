import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../getService.service';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent implements OnInit {


  Character:any;
  constructor(private selected:GetServiceService) { }

  ngOnInit(): void {
   
    this.Character = this.selected.showCharacter();
    
  }

}
