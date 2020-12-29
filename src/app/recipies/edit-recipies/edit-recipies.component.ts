import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-recipies',
  templateUrl: './edit-recipies.component.html',
  styleUrls: ['./edit-recipies.component.css']
})
export class EditRecipiesComponent implements OnInit {
  id:number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params["id"]
        this.editMode = params['id'] != null;
      }
    );
  }

}
