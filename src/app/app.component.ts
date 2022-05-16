import { Component, OnInit, Input } from '@angular/core';

import { Character } from './shared/interface/character.interface';
import { CharacterService } from './shared/services/character.service';
import { environment } from '@enviroment/environment';
import { take } from 'rxjs';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

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
  public files: any = [];
  public previewImage!: string

  private pageNum = 1;
  private query!: string;

  selectedCharacter!: Character;

  constructor(private characterSvc: CharacterService,
    private sanitizer :DomSanitizer,
    private fb: FormBuilder) {
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
    this.characterSvc.searchCharacters(this.query, this.pageNum)
    .pipe(
      take(1)
    ).subscribe((res: any) => {
      const { info, results } = res;
      console.log('res', results)
      this.characters = [...this.characters, ...results]
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

  updateCharacter(character: Character):void{
    // this.selectedCharacter = character;
    this.createCharacter = this.fb.group({
      image: [""],
      name:[character.name , Validators.required],
      gender:[character.gender, Validators.required],
    })
  }
  nose(character: Character){
    const n = this.characters
    .map((c) => character.id === c.id ?
     {...c, name : character.name} : c)

     this.characters = n;
     console.log('this', this.characters)
     //bla
     //bla
  }

  captureFile(event: any):any{
    const captureFile = event.target.files[0]
    this.extraerBase64(captureFile).then((image: any) => {
      this.previewImage = image.base;
    })
  }

  addCharacter() {
    console.log(this.createCharacter)
    this.submitted = true;
    if(this.createCharacter.invalid){
      return;
    }

    const character: any = {
      image: this.previewImage,
      name: this.createCharacter.value.name,
      gender: this.createCharacter.value.gender,
    }

    this.characters = [character, ...this.characters]
    this.createCharacter = this.fb.group({
      image: [""],
      name:['', Validators.required],
      gender:['', Validators.required],
    })
    this.previewImage = " "
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject):any => {
    try{
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base:reader.result
        })
      }
      reader.onerror = error => {
        resolve({
          base:null
        })
      }
    }catch (e) {
      return null
    }
  })
  // onSubmit(){
  //   console.log(this.createCharacter)
  // }
}
