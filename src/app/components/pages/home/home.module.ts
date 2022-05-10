import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CharactersModule } from '../characters/characters.module';
// import { CharactersComponent } from '../characters/characters.component';
// import { CharactersListComponent } from '../characters/characters-list/characters-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    // CharactersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharactersModule
  ]
})
export class HomeModule { }
