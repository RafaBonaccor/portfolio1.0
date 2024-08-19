import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
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

export class SkillsComponent implements OnInit {
  isVisible : boolean =  false;

  @HostListener('window : scroll', [])
  onScroll(): void {
    const componentPosition = document.querySelector('app-skills')?.getBoundingClientRect().top || 0;
    const scrollPosition = window.innerHeight / 1.3;

    if (componentPosition < scrollPosition) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  
  technologies = [
    { name: 'Java, Spring', level: 90 },
    { name: 'Kafka', level: 54 },
    { name: 'Angular', level: 85 },
    { name: 'Camunda', level: 65 },
    { name: 'JavaScript', level: 70 },
  ];

  tools = [
    { name: 'Git, Atlassian', level: 90 },
    { name: 'Swagger', level: 80 },
    { name: 'Windows', level: 90 },
    { name: 'MySql, MongoDB, Postman', level: 90 },
    { name: 'Kubernetes, GCloud', level: 66 },
  ];

  methodologies = [
    { name: 'Scrum', level: 70 },
    { name: 'Agile', level: 90 },
    { name: 'Design Thinking', level: 70 },
    { name: 'TDD', level: 60 },
    { name: 'DevOps', level: 50 },
  ];

  ngOnInit(): void { }
}
