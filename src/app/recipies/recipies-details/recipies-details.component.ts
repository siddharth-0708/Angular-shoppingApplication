import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router';
import { recipe } from '../recipies.model';
import {RecipiesService} from '../recipies.service'

@Component({
  selector: 'app-recipies-details',
  templateUrl: './recipies-details.component.html',
  styleUrls: ['./recipies-details.component.css']
})
export class RecipiesDetailsComponent implements OnInit {
  recipeName:recipe
  id:number

  constructor(private recipieService:RecipiesService, 
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) =>{
      this.id = params["id"];
      this.recipeName = this.recipieService.getRecipe(this.id)
      }
    )
  }
  onAddToShoppingList() {
    this.recipieService.addIngrediantsToShopping(this.recipeName.ingrediants)
  }

}
