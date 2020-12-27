import { Component, Input, OnInit } from '@angular/core';
import { recipe } from '../recipies.model';
import {RecipiesService} from '../recipies.service'

@Component({
  selector: 'app-recipies-details',
  templateUrl: './recipies-details.component.html',
  styleUrls: ['./recipies-details.component.css']
})
export class RecipiesDetailsComponent implements OnInit {
  @Input() recipeName:recipe

  constructor(private recipieService:RecipiesService) { }

  ngOnInit(): void {
  }
  onAddToShoppingList() {
    this.recipieService.addIngrediantsToShopping(this.recipeName.ingrediants)
  }

}
