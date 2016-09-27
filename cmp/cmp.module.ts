import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CmpComponent }   from './cmp.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ CmpComponent ],
  bootstrap:    [ CmpComponent ]
})
export class CmpModule { }
