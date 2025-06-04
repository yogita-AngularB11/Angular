import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  standalone: false,
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent  {
  stats: any;
  assessmentUsers: { name: string, email: string }[] = [];
  microlearningUsers: { name: string, email: string }[] = [];
  courseUsers: { name: string, email: string }[] = [];
  selectedTab: string = 'assessment';

  ngOnInit(): void {
    this.stats = {
      totalUsers: 1200,
      assessments: 850,
      microlearning: 670,
      courses: 450,
    };

    this.assessmentUsers = [
      { name: 'Amit Kumar', email: 'amit@example.com' },
      { name: 'Pooja Shah', email: 'pooja@example.com' },
    ];
    this.microlearningUsers = [
      { name: 'Rahul Mehta', email: 'rahul@example.com' },
    ];
    this.courseUsers = [
      { name: 'Sneha Jain', email: 'sneha@example.com' },
    ];
  }
}
