import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './components/pages/characters/characters-list/characters-list.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"character-list",
    pathMatch:'full'
  },
  // { path: 'home',
  // loadChildren: () =>
  // import(
  //   './components/pages/home/home.module'
  // ).then(m => m.HomeModule)
  // },
//   { path:"character-list",
//   loadChildren: () =>
//   import(
//     './components/pages/characters/characters-list/characters-list.component'
//   ).then((m) => m.CharactersListComponent)
// }
  { path:'character-list', component: CharactersListComponent },
  // { path:'**', redirectTo:"", pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
