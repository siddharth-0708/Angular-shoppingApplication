import { EventEmitter } from '@angular/core';
import { ingrediant } from '../shared/ingrediant.model';

export class ShoppingServices {
   ingrediantsChanged = new EventEmitter<ingrediant[]>()
   private ingrediants: ingrediant[] =  [
        new ingrediant('apples', 5),
        new ingrediant('Tomatoes', 15)
      ]
    getIngrediants(){
        return this.ingrediants.slice()
    }
    addIngrediants(ingrediants:ingrediant) {
        this.ingrediants.push(ingrediants)
        this.ingrediantsChanged.emit(this.ingrediants.slice())
      }
    showIngrediants(ingrediants:ingrediant[]) {
      for(let ingrediant of ingrediants){
        this.addIngrediants(ingrediant);
      }
      this.ingrediantsChanged.emit(this.ingrediants.slice())
    }
}