import { Component } from '@angular/core';
import { provideRouter } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  navItem : string = 'Recipes';

  OnNavigationSelected(selected : string){
    this.navItem = selected;
  }
}
