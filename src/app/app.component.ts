import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navItem : string = 'Recipes';

  constructor(){}

  OnNavigationSelected(selected : string){
    this.navItem = selected;
  }
}
