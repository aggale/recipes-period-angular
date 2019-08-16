import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeThumbComponent } from './components/recipe-thumb/recipe-thumb.component'

@NgModule({
  declarations: [ RecipeThumbComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    RecipeThumbComponent,
  ]
})
export class SharedModule { }
