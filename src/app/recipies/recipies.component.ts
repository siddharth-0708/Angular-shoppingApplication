import { Component, OnInit } from '@angular/core';
import { recipe } from './recipies.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  selectedRecipie:recipe

  constructor() { 
  }

  ngOnInit(): void {
  }
}
