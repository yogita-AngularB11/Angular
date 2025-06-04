import { Component } from '@angular/core';

@Component({
  selector: 'app-visual-stats',
  standalone: false,
  templateUrl: './visual-stats.component.html',
  styleUrl: './visual-stats.component.css'
})
export class VisualStatsComponent {
// Stats
  stats = {
    totalUsers: 1200,
    assessments: 850,
    microlearning: 670,
    courses: 450,
  };

  // Table Data
  assessmentUsers = [
    { name: 'Amit Kumar', email: 'amit@example.com' },
    { name: 'Pooja Shah', email: 'pooja@example.com' },
  ];

  // Chart Data
  barChartLabels = ['Assessments', 'Microlearning', 'Courses'];
  barChartData = [{ data: [850, 670, 450], label: 'Completions' }];
  pieChartLabels = ['Assessments', 'Microlearning', 'Courses'];
  pieChartData = [850, 670, 450];

  barChartOptions = {
    responsive: true
  };
}
