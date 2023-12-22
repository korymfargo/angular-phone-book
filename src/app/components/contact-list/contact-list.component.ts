import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'exp',
    'pkg',
  ];
  dataSource = new MatTableDataSource<Contact>([]);
  pageSizeOptions = [5, 10, 20];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) contactTable!: MatTable<Contact>;

  constructor(private contactService: ContactService) {};

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.fetchAllContacts();
  }

  fetchAllContacts() {
    console.log(this.paginator);
    this.contactService.getAllContacts().then((contacts: Array<Contact>) => {
      this.dataSource.data = contacts;
      this.contactTable.renderRows();
    })
  }
}