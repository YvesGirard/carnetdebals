import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';

import { CmpComponent }   from './cmp.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    routing 
    ],
  declarations: [ 
    CmpComponent,
    HeroesComponent,
    HeroDetailComponent 
    ],
  bootstrap:    [ CmpComponent ],
  providers: [HeroService]
})
export class CmpModule { 
  
}
