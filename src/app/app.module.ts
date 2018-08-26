import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GestCmdClientsHomeModule } from './home/home.module';
import { GestCmdClientsEntityModule } from './entities/entity.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    GestCmdClientsHomeModule,
    GestCmdClientsEntityModule,
    HttpClientModule, 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
