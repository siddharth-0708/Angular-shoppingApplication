import { Component, Input, OnInit, ViewChild, ElementRef, AfterContentInit} from '@angular/core';
import { ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  @Input() cashew:string // the input suggests the value will be assigned from the parent
  ingrediants: ingrediant[] =  [
    new ingrediant('apples', 5),
    new ingrediant('Tomatoes', 15)
  ]
  @ViewChild('paraOne', {static: true}) paraOne: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  onIngAdded(data){
    this.ingrediants.push(data)
  }

}
