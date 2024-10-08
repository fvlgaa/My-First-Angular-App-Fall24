import {Component, Input} from '@angular/core';
import { phone } from "../models/phones";
import {DecimalPipe} from "@angular/common";
@Component({
  selector: 'app-phone-list-item',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './phone-list-item.component.html',
  styleUrl: './phone-list-item.component.css'
})
export class PhoneListItemComponent {

  @Input() phoneItem!: phone;
}
