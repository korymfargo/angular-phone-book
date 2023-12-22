import { Component, ViewChild, AfterViewInit, EventEmitter } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { ContactListComponent } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss'],
})
export class PhoneBookComponent implements AfterViewInit {
  @ViewChild(MatTabGroup) phoneBook!:MatTabGroup;
  @ViewChild(ContactListComponent) contactList!:ContactListComponent;

  ngAfterViewInit(): void {
    this.phoneBook.selectedIndex = 1;
  }

  onContactCreated() {
    this.phoneBook.selectedIndex = 0;
    this.contactList.fetchAllContacts();
  }
}
