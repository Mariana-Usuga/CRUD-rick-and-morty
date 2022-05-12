import { Component, OnInit, Input } from '@angular/core';

import { Character } from './shared/interface/character.interface';
import { CharacterService } from './shared/services/character.service';
import { environment } from '@enviroment/environment';
import { take } from 'rxjs';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CRUD-rick-and-morty';

  displayedColumns: string[] = ['image','name', 'gender', 'updateDelete'];
  characters: Character[] = [];
  createCharacter!: FormGroup;
  submitted = false;
  // createCharacter!: Character;
  // info: RequestInfo = {
  //   next: "",
  // }

  private pageNum = 1;
  private query!: string;
  // private hideScrollHeight = 200;
  // private showScrollHeight = 500;

  constructor(private characterSvc: CharacterService, private fb: FormBuilder) {
    this.createCharacter =  this.fb.group({
      image: [""],
      name:['', Validators.required],
      gender:['', Validators.required],
    })
  }

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
      const { info, results } = res;
      console.log('re', results)
      this.characters = [...this.characters, ...results]
      // this.info = info
    })
  }

  onClick(id: number):void{
    Swal.fire({
      title: 'Are you sure to delete this character?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', '', 'success')
        this.characters = this.characters.filter(character => character.id != id)
      }
    })
  }

  addCharacter() {
    console.log(this.createCharacter)
    this.submitted = true;
    if(this.createCharacter.invalid){
      return;
    }

    const character: any = {
      image: this.createCharacter.value.image,
      name: this.createCharacter.value.name,
      gender: this.createCharacter.value.gender,
    }

    this.characters = [...this.characters, character]
  }
  // onSubmit(){
  //   console.log(this.createCharacter)
  // }
}
