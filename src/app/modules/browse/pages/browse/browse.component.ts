import { Component, OnInit } from '@angular/core';
import { RECIPES } from '../../../../mock-recipes';

@Component({
  selector: 'rec-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  recipes = RECIPES;

  constructor() { }

  ngOnInit() {
  }

}
