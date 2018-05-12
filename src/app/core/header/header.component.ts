import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        // (response: Response) => {
        //   console.log(response);
        // }
        //Now using HttpEvents
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getStoredRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}