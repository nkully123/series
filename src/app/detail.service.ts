import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DetailService {

  url:string = "https://breakingbadapi.com/api/characters";


  constructor(private http: HttpClient) { }

  get(){
  
    return this.http.get(this.url);
  }

  serchingPerson(character:any)
  {
    return this.http.get(`${this.url}?name=${character.name}`)
    // return this.http.get("https://breakingbadapi.com/api/characters?name="+character.nameToSearch);
    
  }
}
