import { Component, ElementRef, ViewChild } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ParticularsComponent } from "./particulars/particulars.component";
import { Title } from '@angular/platform-browser';
import { FooterComponent } from "./footer/footer.component";
import { jsPDF } from 'jspdf';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ParticularsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('invoice', { static: false}) invoice!: ElementRef;
  datePipe: DatePipe = new DatePipe('en-US');
  date: string = this.datePipe.transform(new Date(), 'yyyyMMdd') || '';

  constructor(private title: Title) {
    title.setTitle("🧾 Invoice Generator")
  }

  generatePDF() {}
}
