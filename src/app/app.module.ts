import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TypeofbeerPipe } from './typeofbeer.pipe';
import { AppComponent } from './app.component';
import { NewBeerComponent } from './new-beer/new-beer.component';
import { NewpipePipe } from './newpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewBeerComponent,
    TypeofbeerPipe,
    NewpipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
