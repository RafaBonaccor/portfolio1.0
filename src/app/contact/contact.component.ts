import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [
        animate('1s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class ContactComponent {
  isVisible : boolean =  false;
  constructor(private http: HttpClient) {}

  @HostListener('window : scroll', [])
  onScroll(): void {
    const componentPosition = document.querySelector('app-contact')?.getBoundingClientRect().top || 0;
    const scrollPosition = window.innerHeight / 1.3;

    if (componentPosition < scrollPosition) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  onSubmit(form: NgForm) {
    const formData = form.value;

    this.http.post('http://localhost:3000/send-email', formData).subscribe(
      response => {
        console.log('Email sent successfully', response);
        alert('Email sent successfully');
      },
      error => {
        console.error('Error sending email', error);
        alert('Error sending email');
      }
    );
  }
}
