import { Component, Input, OnInit} from '@angular/core';
import { recipe } from '../../recipies.model';

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
  @Input() recipie:recipe
  @Input() index: number

  ngOnInit(): void {
  }
}
