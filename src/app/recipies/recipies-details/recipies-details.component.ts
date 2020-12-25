import { Component, Input, OnInit } from '@angular/core';
import { recipe } from '../recipies.model';

@Component({
  selector: 'app-recipies-details',
  templateUrl: './recipies-details.component.html',
  styleUrls: ['./recipies-details.component.css']
})
export class RecipiesDetailsComponent implements OnInit {
  @Input() recipeName:recipe

  constructor() { }

  ngOnInit(): void {
  }

}
