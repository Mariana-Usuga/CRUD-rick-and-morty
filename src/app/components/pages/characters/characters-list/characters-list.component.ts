import { Component, OnInit } from '@angular/core';

import { Character } from '@app/shared/interface/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { environment } from '@enviroment/environment';
import { take } from 'rxjs/operators'

// type RequestInfo = {
//   next: string;
// }

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})

export class CharactersListComponent implements OnInit {
  characters: Character[] = [];
  // info: RequestInfo = {
  //   next: "",
  // }

  private pageNum = 1;
  private query!: string;
  // private hideScrollHeight = 200;
  // private showScrollHeight = 500;

  constructor(private characterSvc: CharacterService) { }

  ngOnInit(): void {
    console.log('wor', environment.baseUrlAPI)
    this.getDataFromServices();
  }

  private getDataFromServices():void{
    console.log('entra en getdata')
    this.characterSvc.searchCharacters(this.query, this.pageNum)
    .pipe(
      take(1)
    ).subscribe((res: any) => {
      const { results } = res;
      console.log('re', results)
      this.characters = [...this.characters, ...results]
      // this.info = info
    })
  }

}
