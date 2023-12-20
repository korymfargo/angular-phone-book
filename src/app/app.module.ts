import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    ContactListComponent,
    CreateContactComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
