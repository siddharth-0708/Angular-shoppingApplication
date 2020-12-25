import { Component, Input, OnInit,EventEmitter, Output} from '@angular/core';
import { recipe } from '../../recipies.model';

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
  @Input() recipie:recipe
  @Output() itemClick = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }
  onSelectLink() {
    this.itemClick.emit()
  }

}
