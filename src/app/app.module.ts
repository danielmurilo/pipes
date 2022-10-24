import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComprimentoPipe } from './comprimento.pipe';
import { MoedaRealComEspacoPipe } from './moeda-real-com-espaco.pipe';
import { CpfPipe } from './cpf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComprimentoPipe,
    MoedaRealComEspacoPipe,
    CpfPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
