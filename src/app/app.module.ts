import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
// Root Component
import { AppComponent } from './app.component';

// Services
import { BankService } from './services/bank.service';

// Components
import { CompOneComponent } from './components/comp-one/comp-one.component';
import { CompTwoComponent } from './components/comp-two/comp-two.component';

// Imports for loading & configuring the in-memory web api
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemHeroService } from './services/in-memory-data/in-memory-data.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    CompTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
    // HttpClientInMemoryWebApiModule.forRoot(InMemHeroService)
  ],
  providers: [
    BankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
