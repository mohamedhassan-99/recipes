import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  result: any;
  constructor(
    private dataStorageService: DataStorageService,
    private http: HttpClient
  ) {}
  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe((response: any) => {
      console.log(response);
    });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
