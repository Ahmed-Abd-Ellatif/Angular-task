import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleOfComComponent } from 'src/app/components/title-of-com/title-of-com.component';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    TitleOfComComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private fb: FormBuilder) {}

  formData = this.fb.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  get userName() {
    return this.formData.get('userName');
  }
  get email() {
    return this.formData.get('email');
  }
  get subject() {
    return this.formData.get('subject');
  }
  get message() {
    return this.formData.get('message');
  }
  sendData() {
    console.log(this.formData.value);
    this.formData.reset();
  }
}
