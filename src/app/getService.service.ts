import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor() { }

  character: any = {};

  getSelectedCharacter(character: any){
    console.log(character);
    this.character = character
  }

  showCharacter(){
    return this.character
  }

  // public set selected(selectCharecter : string) {
  //   this.currentCharater = selectCharecter;
  // }
  
  // public get selected() : string {
  //   return this.currentCharater;
  // }
  
  
}
