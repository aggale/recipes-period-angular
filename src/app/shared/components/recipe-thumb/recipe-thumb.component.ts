import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/models/recipe'

@Component({
  selector: 'rec-recipe-thumb',
  templateUrl: './recipe-thumb.component.html',
  styleUrls: ['./recipe-thumb.component.css']
})
export class RecipeThumbComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
