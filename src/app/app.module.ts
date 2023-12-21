import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PhoneBookComponent } from './components/phone-book/phone-book.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { CreateContactComponent } from './components/create-contact/create-contact.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
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
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
