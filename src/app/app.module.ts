import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

// Root Component
import { AppComponent } from './app.component';

// Services
import { BankService } from './services/bank.service';

// Components
import { CompOneComponent } from './components/comp-one/comp-one.component';
import { CompTwoComponent } from './components/comp-two/comp-two.component';

@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    CompTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
