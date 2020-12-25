import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  kaaju = "almond";
  loadedFeature = 'recipie'
  onNavigate(feature:string){
    this.loadedFeature = feature
  }
}
