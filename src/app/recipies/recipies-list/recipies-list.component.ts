import { Component, OnInit} from '@angular/core';
import { recipe } from '../recipies.model';
import { ActivatedRoute, Router} from '@angular/Router';
import {RecipiesService} from '../recipies.service'

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {

  recipies: recipe[];

  constructor(private recipieServices:RecipiesService,
    private router: Router,
    private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.recipies = this.recipieServices.getRecipies()
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo:this.route})
  }

}
