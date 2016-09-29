import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { CmpComponent }   from './cmp.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent }   from './hero-search.component';
import { HighlightDirective }   from './highlight.directive';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
  declarations: [ 
    CmpComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HighlightDirective 
    ],
  bootstrap:    [ CmpComponent ],
  providers: [HeroService]
})
export class CmpModule { 
  
}
