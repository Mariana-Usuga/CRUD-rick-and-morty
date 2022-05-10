import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharactersListComponent } from './characters-list/characters-list.component';

const myComponents = [
  CharactersListComponent
]

@NgModule({
  declarations: [...myComponents],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[...myComponents]
})
export class CharactersModule { }
