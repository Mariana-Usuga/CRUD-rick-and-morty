import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { CharactersListComponent } from './components/pages/characters/characters-list/characters-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component'
// import { jsonPipe } from './convert-to-spaces.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    HeaderComponent,
    FormSearchComponent,
    CharactersListComponent
    // jsonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
