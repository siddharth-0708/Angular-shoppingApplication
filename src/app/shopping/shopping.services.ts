import { EventEmitter } from '@angular/core';
import { ingrediant } from '../shared/ingrediant.model';

export class ShoppingServices {
   ingrediantsChanged = new EventEmitter<ingrediant[]>()
   startedEditing = new EventEmitter<number>()

   private ingrediants: ingrediant[] =  [
        new ingrediant('apples', 5),
        new ingrediant('Tomatoes', 15)
      ]
    getIngrediants(){
        return this.ingrediants.slice()
    }
    findIngrediant(index:number){
      return this.ingrediants[index]
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
    updateIngrediants(index,newIngrediant){
      this.ingrediants[index] = newIngrediant
      this.ingrediantsChanged.emit(this.ingrediants.slice())
    }
    deleteIngrediants(index){
      this.ingrediants.splice(index,1)
      this.ingrediantsChanged.emit(this.ingrediants.slice())
    }
}