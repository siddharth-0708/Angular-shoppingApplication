import { Component, Input, OnInit, ViewChild, ElementRef, AfterContentInit} from '@angular/core';
import { ingrediant } from '../shared/ingrediant.model';
import { ShoppingServices } from '../shopping/shopping.services';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  @Input() cashew:string // the input suggests the value will be assigned from the parent
  ingrediants: ingrediant[];
  @ViewChild('paraOne', {static: true}) paraOne: ElementRef;

  constructor(private shoppingService: ShoppingServices) { }

  ngOnInit(): void {
    this.ingrediants = this.shoppingService.getIngrediants()
    this.shoppingService.ingrediantsChanged.subscribe(
      (ingrediants: ingrediant[]) => {
      this.ingrediants = ingrediants }
    )
  }
  onEditItem(index:number){
    this.shoppingService.startedEditing.emit(index)
  }
}
