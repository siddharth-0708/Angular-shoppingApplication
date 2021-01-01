import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ingrediant } from '../../shared/ingrediant.model';
import { ShoppingServices } from '../../shopping/shopping.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  editMode= false;
  editedIndex:number;
  editedItem:ingrediant
  @ViewChild('f', {static: true}) f: NgForm;


  constructor(private shoppingService: ShoppingServices) { }

  ngOnInit(): void {
    this.shoppingService.startedEditing.subscribe(
      (index:number) =>{
        this.editMode = true
        this.editedIndex = index
        this.editedItem = this.shoppingService.findIngrediant(index)
        this.f.setValue({
          Name:this.editedItem.name,
          Amount: this.editedItem.amount
        })
      }
  )
}
  onAdd(form: NgForm){
    const val = form.value
    const newIng = new ingrediant(val.Name, val.Amount)
    if(this.editMode){
      this.shoppingService.updateIngrediants(this.editedIndex,newIng)
    } else {
      this.shoppingService.addIngrediants(newIng)
    }
    this.editMode = false
    this.f.reset()
  }
  onClear(){
    this.editMode = false
    this.f.reset()
  }
  onDelete(){
    this.shoppingService.deleteIngrediants(this.editedIndex)
    this.editMode = false
    this.f.reset()
  }
}
