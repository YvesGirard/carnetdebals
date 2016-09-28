import { Component } from '@angular/core';

@Component({
  selector: 'cmp-app',
  template: `
   <h1>{{title}}</h1>
   <a routerLink="/heroes">Compétiteurs</a>
   <router-outlet></router-outlet>
 `
})

export class CmpComponent {
  title = 'Liste des compétiteurs';
}

