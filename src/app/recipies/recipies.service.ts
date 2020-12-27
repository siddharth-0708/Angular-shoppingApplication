import { EventEmitter, Injectable } from '@angular/core';
import { recipe } from './recipies.model';
import { ingrediant } from '../shared/ingrediant.model';
import { ShoppingServices } from '../shopping/shopping.services';

@Injectable() //inserting service into service
export class RecipiesService {
  recipieSelected = new EventEmitter<recipe>();
  
   private recipies: recipe[] = [
        new recipe('cashew', 
        'hola',
        'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=970%2C546&ssl=1',
        [
          new ingrediant('meat',1,),
          new ingrediant('french',20,)
        ]),
        new recipe('almond',
         'Amigo',
         'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=970%2C546&ssl=1',
         [
          new ingrediant('bun',1,),
          new ingrediant('sause',20,)
         ])
      ]
      constructor(private shoppingService:ShoppingServices){}
      getRecipies(){
          return this.recipies.slice();
      }
      addIngrediantsToShopping(ingrediant:ingrediant[]){
        this.shoppingService.showIngrediants(ingrediant);
      }
}