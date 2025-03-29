import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticularItem } from './model/particular-item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-particulars',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './particulars.component.html',
  styleUrl: './particulars.component.scss'
})
export class ParticularsComponent {
  items: ParticularItem[] = []

  constructor() {
    this.addItem();
  }

  addItem() {
    this.items.push({
      description: '',
      quatity: 1,
      rate: 0.0,
      amount: 0.0,
      comment: '',
      showComment: false
    });
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  calculateAmount(index: number) {
    let item = this.items[index];
    item.amount = item.rate * item.quatity;
  }

  toggleComment(index: number) {
    this.items[index].showComment = !this.items[index].showComment;
  }
}
