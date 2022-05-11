import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@enviroment/environment';
import { Character } from '@shared/interface/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query = "", page = 1){
    const filter = `${environment.baseUrlAPI}/?name=${query}&pages=${page}`
    return this.http.get<Character[]>(filter)
  }

  // deleteCharacter(query = "", page = 1){
  //   const filter = `${environment.baseUrlAPI}/?name=${query}&pages=${page}`
  //   return this.http.get<Character[]>(filter)
  // }

  // getDetails(id: number) {
  //   return this.http.get<Character>(`/${environment.baseUrlAPI}/${id}`)
  // }
}
