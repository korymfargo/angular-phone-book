import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiURL = 'http://localhost:8080/api';

  constructor() { }

  getAllContacts(): Promise<Contact[]> {
    return axios.get<Contact[]>(`${this.apiURL}/contacts`).then(res => res.data);
  }

  createContact(contact: Contact): Promise<Contact> {
    return axios.post<Contact>(`${this.apiURL}/contacts`, contact).then(res => res.data);
  }
}
