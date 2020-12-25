import { Component, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import { ingrediant } from '../../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;
  @Output() ingredAdded = new EventEmitter<{name:string,amount:number}>()

  constructor() { }

  ngOnInit(): void {
  }
  onAdd(){
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIng = new ingrediant(ingName, ingAmount)
    this.ingredAdded.emit(newIng)
  }

}
