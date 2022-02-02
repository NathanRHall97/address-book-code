import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhoneBookComponent } from './phone-book.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PhoneBookComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
