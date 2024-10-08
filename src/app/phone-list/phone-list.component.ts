import { Component } from '@angular/core';
import {phone,} from "../models/phones";
import {PhoneListItemComponent} from "../phone-list-item/phone-list-item.component";

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [
    PhoneListItemComponent
  ],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent {
  phoneList: phone[]=[
    { id :1, brand: 'Apple', model: 'iPhone 16', price: 999, isSmartphone: true, },
    { id :2, brand: 'Samsung', model: 'Galaxy S24', price: 799, isSmartphone: true },
    { id :3, brand: 'Google', model: 'Pixel 8', price: 599, isSmartphone: true },
    { id :4, brand: 'OnePlus', model: 'OnePlus 5', price: 729, isSmartphone: true },
    { id :5, brand: 'Nokia', model: '3345', price: 49, isSmartphone: false },
    { id :6, brand: 'Sony', model: 'Xperia 4', price: 899, isSmartphone: true }

  ]



}
