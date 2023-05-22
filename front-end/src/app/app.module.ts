import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegiaoComponent } from './regiao/regiao.component';
import { SeletorCidadeComponent } from './seletor-cidade/seletor-cidade.component';

@NgModule({
  declarations: [
    AppComponent,
    RegiaoComponent,
    SeletorCidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
