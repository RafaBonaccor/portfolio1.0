import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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

export class AppComponent implements OnInit {

  
  title = 'Hello, I am Rafael Bonaccordi and I\'m a';
  job = 'Full Stack Developer';
  typedTitle = ''; // Variabile per l'animazione di digitazione
  typedJob = ''; // Variabile per l'animazione di digitazione
  skillsVisible = false;
  
  private titleIndex = 0; // Indice per avanzare tra i caratteri del titolo
  private jobIndex = 0; // Indice per avanzare tra i caratteri del lavoro

  ngOnInit(): void {
    // Avvia le animazioni di digitazione
    this.typeTitle();
  }

/*   // Ascolta l'evento di scroll per attivare il componente Skill
  @HostListener('window:scroll', [])
  onScroll(): void {
    const skillsSection = document.querySelector('app-skills') as HTMLElement;
    if (skillsSection) {
      const rect = skillsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Verifica se la sezione "Skill" è effettivamente visibile
      if (rect.top <= windowHeight - 100) { // Aggiungi un margine per attivare la transizione prima
        this.skillsVisible = true;
      }
    }
  } */

  // Funzione per digitare lettera per lettera il titolo
  private typeTitle(): void {
    if (this.titleIndex < this.title.length) {
      this.typedTitle += this.title[this.titleIndex++];
      setTimeout(() => this.typeTitle(), 100); // Cambia il tempo a piacere
    } else {
      // Dopo aver terminato il titolo, inizia la digitazione del lavoro
      setTimeout(() => this.typeJob(), 1000); // Aggiungi un ritardo prima di iniziare a digitare il lavoro
    }
  }

  // Funzione per digitare lettera per lettera il lavoro
  private typeJob(): void {
    if (this.jobIndex < this.job.length) {
      this.typedJob += this.job[this.jobIndex++];
      setTimeout(() => this.typeJob(), 100); // Cambia il tempo a piacere
    } else {
      // Dopo aver terminato il lavoro, riavvia il ciclo
      setTimeout(() => this.resetTyping(), 2000); // Aggiungi un ritardo prima di riavviare il ciclo
    }
  }

  // Funzione per resettare la digitazione
  private resetTyping(): void {
    this.typedTitle = '';
    this.typedJob = '';
    this.titleIndex = 0;
    this.jobIndex = 0;
    this.typeTitle();
  }
}
