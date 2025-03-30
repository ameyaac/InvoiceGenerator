import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticularItem } from './model/particular-item';
import { ParticularTotal } from './model/particular-total';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-particulars',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './particulars.component.html',
  styleUrl: './particulars.component.scss'
})
export class ParticularsComponent {
  date: Date = new Date();
  
  items: ParticularItem[] = []
  total: ParticularTotal = {
    items: this.items,
    subTotal: 0.0,
    discount: 0.0,
    tax: 0.0,
    grandTotal: 0.0
  }
  
  constructor() {
    this.addItem();
  }

  addItem() {
    this.items.push({
      description: '',
      quantity: 1,
      rate: 0.0,
      amount: 0.0,
      comment: '',
      showComment: false
    });
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.calculateSubTotal();
  }

  calculateAmount(index: number) {
    let item = this.items[index];
    item.amount = item.rate * item.quantity;
    this.calculateSubTotal();
  }

  toggleComment(index: number) {
    this.items[index].showComment = !this.items[index].showComment;
  }

  calculateSubTotal() {
    this.total.subTotal = this.items.reduce((sum, item) => sum + item.amount, 0);
    this.calculateGrandTotal();
  }

  calculateGrandTotal() {
    this.total.grandTotal = this.total.subTotal - this.total.discount + this.total.tax;
  }
}
