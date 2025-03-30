import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { randomUUID } from 'crypto';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // date = new Date().toISOString().split("T")[0];
  date: Date = new Date();
  id: string = crypto.randomUUID();
}
