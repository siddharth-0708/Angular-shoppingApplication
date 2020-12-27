import { Component, OnInit} from '@angular/core';
import { recipe } from '../recipies.model';
import {RecipiesService} from '../recipies.service'

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {

  recipies: recipe[];

  constructor(private recipieServices:RecipiesService) {
   }

  ngOnInit(): void {
    this.recipies = this.recipieServices.getRecipies()
  }

}
