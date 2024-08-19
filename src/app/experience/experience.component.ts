// experience.component.ts
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
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

export class ExperienceComponent implements OnInit {
  isVisible : boolean =  false;
  education = [
    {
      degree: "High School Graduation",
      description: "IT Scientific Address",
      institution: "Institute of education VarzeaGrandense, BR",
      period: "2015 - 2018"
    },
    {
      degree: "Front-End Bootcamp",
      description: "Bootcamp for Front-End development",
      institution: "BC Soft, IT",
      period: "2021 - 2019"
    },
    {
      degree: "Full-Stack Bootcamp",
      description: "Development of applications ",
      institution: "Philmark Group, IT",
      period: "2021 - 2021"
    },
  ];

  experiences = [

    {
      title: "Java Full Stack Developer",
      company: "01s Sistemi, Arezzo, Italia",
      period: "2023 - Present (1 Year)",
      logo: "assets/logos/agc.png", // Path del logo
      missions: [
        " - MISSION 1: Maintenance and Enhancement of Large-Scale Public Sector Project: Managed and enhanced a complex project for the public administration, ensuring stability and continuous improvement.",
        " - MISSION 2: Development of New APIs for Microservices Communication: Created and optimized APIs to facilitate seamless communication between various microservices and user interfaces.",
        " - MISSION 3: Monitoring and Managing Workloads in the Cloud: Monitored and assessed workload distribution in a cloud environment, utilizing Kubernetes for efficient resource management.",
        " - MISSION 4: Integration of MongoDB with Scalable Microservices: Implemented and maintained MongoDB within the project, ensuring scalable and efficient data storage for microservices."
      ],
      technologies: "Java 8+, Spring, Typescript, Angular, MongoDB, Kafka, Camunda, Kubernetes",
      showDetails: false
    },
    {
      title: "Junior Java Full Stack Developer",
      company: "KPMG, Roma, Italia",
      period: "2022 - 2023 (1 year)",
      logo: "assets/logos/agc.png", // Path del logo
      missions: [
        " - MISSION 1: Implementation of New APIs: Developed and integrated RESTful APIs to enhance communication between the frontend and backend, optimizing application performance.",
        " - MISSION 2: Building WebApps from Scratch: Designed and created full-fledged web applications from initial architecture to deployment, utilizing technologies such as Java, Spring Boot, and Angular.",
        " - MISSION 3: Development of User Interfaces: Created and optimized intuitive and responsive user interfaces, ensuring a smooth user experience across various platforms.",
        " - MISSION 4: Client Interaction and Requirements Gathering: Engaged directly with clients to understand their needs, translated business requirements into effective technical solutions, and provided ongoing support throughout the development process."
      ],
      technologies: "Java 8+, Spring, Typescript, Angular, JSP, SQL, Swagger",
      showDetails: false
    },
    {
      title: "Software Mantainer",
      company: "MM&Partners Law Firm, Roma, Italia",
      period: "2021 - 2022 (1 year)",
      logo: "assets/logos/scotfy.png", // Path del logo
      missions: [
        " - MISSION 1: Implement a theme manager (colors, logo).",
        " - MISSION 2: Set up a virtual folder manager for containing Qlik Sense apps.",
        " - MISSION 3: Develop a resource-saving interface.",
        " - MISSION 4: Create customizable web pages: Qlik Sense Mashups."
      ],
      technologies: "Html, Css, Javascript, Cisco Tools, Angular, MySQL, Office ",
      showDetails: false
    }
  ];

  languages = [
    { code: 'us', name: 'English', level: 'Good level' },
    { code: 'fr', name: 'French', level: 'Fluent' },
    { code: 'it', name: 'Italian', level: 'Intermediate' }
  ];

  interests = [
    { icon: '🏐', title: 'Sport', description: '5 years Gym' },
    { icon: '✈️', title: 'Trips', description: 'Belgium, Spain, Netherlands, Brazil' },
    { icon: '🎲', title: 'Games', description: 'Chess, Dominoes, Poker, ...etc' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window : scroll', [])
  onScroll(): void {
    const componentPosition = document.querySelector('app-experience')?.getBoundingClientRect().top || 0;
    const scrollPosition = window.innerHeight / 1.3;

    if (componentPosition < scrollPosition) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  toggleDetails(index: number): void {
    this.experiences[index].showDetails = !this.experiences[index].showDetails;
  }
}
