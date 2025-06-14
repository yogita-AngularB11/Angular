import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'iframedemo';
   reportUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const metabaseUrl = 'https://your-metabase.com/public/dashboard/abc123...'; // Replace with actual public URL
    this.reportUrl = this.sanitizer.bypassSecurityTrustResourceUrl(metabaseUrl);
}
