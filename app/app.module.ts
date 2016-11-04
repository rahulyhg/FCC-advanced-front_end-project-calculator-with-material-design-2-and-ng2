import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
// Bring in all of our angular2-material libraries.
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule }   from '@angular2-material/card';
import { MdIconModule }   from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon';
import { MdInputModule }  from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
  ],
  providers: [ MdIconRegistry ],
})

export class AppModule { }
