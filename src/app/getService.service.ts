import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor() { }

  character: any = {};
 founded:any;
  getSelectedCharacter(character: any){
    console.log(character);
    this.character = character
  }


  setFounder(founded: any){
    console.log(founded);
    this.founded = founded;
  }

getFounder(){

  return this.founded;
}


  showCharacter(){
    
    console.log(this.character);
    return this.character
  }

  // public set selected(selectCharecter : string) {
  //   this.currentCharater = selectCharecter;
  // }
  
  // public get selected() : string {
  //   return this.currentCharater;
  // }
  
  
}
