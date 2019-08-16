import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe'

@Component({
  selector: 'rec-recipe-thumb',
  templateUrl: './recipe-thumb.component.html',
  styleUrls: ['./recipe-thumb.component.css']
})
export class RecipeThumbComponent implements OnInit {
  @Input() recipe: Recipe;
  ingredientList: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.ingredientList = this.recipe.ingredients.map(ing => ing.replace(/[0-9\/ ]+ ((c.?|cup|lb.?|lbs|T.?|t.?|oz) )?/i, ''))
      .join(', ');
    // this.ingredientList = this.recipe.ingredients.replace(/\[|\]|\"/g, "")
    //   .split(',')
    //   .map(ing =>
    //     {
    //       return ing.replace(/[0-9\/ ]+ ((c.?|cup|lb.?|lbs|T.?|t.?|oz) )?/i, '');
    //     })
    //   .join(', ');
  }

}
