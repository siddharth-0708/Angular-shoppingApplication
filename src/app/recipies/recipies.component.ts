import { Component, OnInit } from '@angular/core';
import { recipe } from './recipies.model';
import {RecipiesService} from './recipies.service'

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipiesService]
})
export class RecipiesComponent implements OnInit {
  selectedRecipie:recipe

  constructor(private recipieServices: RecipiesService) { 
  }

  ngOnInit(): void {
    this.recipieServices.recipieSelected.subscribe( //subscribing an invent and get informed about any changes that takes place
      (recipe:recipe) => {
        this.selectedRecipie = recipe
      }
    )
  }
}
