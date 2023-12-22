import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactForm } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent {
  @Output() contactCreated: EventEmitter<number> = new EventEmitter<number>();
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      firstname: ['Joe', Validators.required],
      lastname: ['Dav', Validators.required],
      gender: ['male', Validators.required],
      email: ['jd@gmail.com', [Validators.required, Validators.email]],
      dob: ['1989-09-23', Validators.required],
      education: ['no-degree', Validators.required],
      company: ['Company', Validators.required],
      exp: [11, Validators.required],
      pkg: [120000, Validators.required],
    });
  }

  get firstname() { return this.contactForm.get('firstname'); }
  get lastname() { return this.contactForm.get('lastname'); }
  get gender() { return this.contactForm.get('gender'); }
  get email() { return this.contactForm.get('email'); }
  get dob() { return this.contactForm.get('dob'); }
  get education() { return this.contactForm.get('education'); }
  get company() { return this.contactForm.get('company'); }
  get exp() { return this.contactForm.get('exp'); }
  get pkg() { return this.contactForm.get('pkg'); }

  onCreate() {
    this.contactService.createContact(this.contactForm.value as ContactForm).then(() => {
      this.contactCreated.emit(1);
    });
  }

  onClear(e: MouseEvent) {
    e.preventDefault();
    this.contactForm.reset();
  }
}
