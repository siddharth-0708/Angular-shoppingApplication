import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipies.model';


@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {

  recipies: recipe[] = [
    new recipe('test', 'hello','https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=970%2C546&ssl=1'),
    new recipe('test', 'hello','https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=970%2C546&ssl=1')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
