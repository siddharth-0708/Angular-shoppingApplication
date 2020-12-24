import { Component, OnInit } from '@angular/core';
import { ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingrediants: ingrediant[] =  [
    new ingrediant('apples', 5),
    new ingrediant('Tomatoes', 15)

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
