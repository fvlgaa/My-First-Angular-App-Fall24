import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DatePipe, DecimalPipe} from '@angular/common';
import { phone } from'./models/phones';
import {NgForOf, NgIf} from "@angular/common";
import {PhoneListComponent} from "./phone-list/phone-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, DecimalPipe, NgForOf, NgIf, PhoneListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leke repairs';
  classDescription: string = 'javascript and frameworks'; // Use camelCase for fields
  teacher: string = 'Matthew Huang';
  phonesList: phone[] = [
    { id :1, brand: 'Apple', model: 'iPhone 14', price: 999, isSmartphone: true },
    { id :2, brand: 'Samsung', model: 'Galaxy S21', price: 799, isSmartphone: true },
    { id :3, brand: 'Google', model: 'Pixel 7', price: 599, isSmartphone: true },
    { id :4, brand: 'OnePlus', model: 'OnePlus 9', price: 729, isSmartphone: true },
    { id :5, brand: 'Nokia', model: '3310', price: 49, isSmartphone: false },
    { id :6, brand: 'Sony', model: 'Xperia 5', price: 899, isSmartphone: true }
  ];
}
