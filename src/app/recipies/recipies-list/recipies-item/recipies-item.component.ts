import { Component, Input, OnInit} from '@angular/core';
import { recipe } from '../../recipies.model';
import {RecipiesService} from '../../recipies.service'

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
  @Input() recipie:recipe

  constructor(private recipieServices:RecipiesService) {
   }

  ngOnInit(): void {
  }
  onSelectLink() {
    this.recipieServices.recipieSelected.emit(this.recipie);
  }

}
