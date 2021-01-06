import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  private userSub : Subscription;
  constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

  ngOnInit(){
    this.userSub = this.authService.userEmitter.subscribe(user => {
      this.isAuthenticated = !user ? false : true
    })
  }
  onSaveData() {
    this.dataStorageService.storeRecipie()
  }
  onFetch(){
    this.dataStorageService.fetchRecipie();
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe()
    
  }
}