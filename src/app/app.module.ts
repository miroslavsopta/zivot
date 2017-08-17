import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DisqusModule } from 'ngx-disqus';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DisqusModule.forRoot('zivot-u-njemackoj')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
