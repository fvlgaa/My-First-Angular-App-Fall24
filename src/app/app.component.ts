import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DatePipe, DecimalPipe} from '@angular/common';
import { phone } from'./models/phones';
import {NgForOf, NgIf} from "@angular/common";
import {PhoneListComponent} from "./phone-list/phone-list.component";
import {phoneList} from "./models/mockPhones.data";
import {PhoneListItemComponent} from "./phone-list-item/phone-list-item.component";
import { PhonesService} from "./services/phones.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, DecimalPipe, NgForOf, NgIf, PhoneListComponent, PhoneListItemComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'leke repairs';
  singlePhone?: phone;
  constructor(private phonesService: PhonesService) {
  }
  ngOnInit(): void {
    this.phonesService.getPhonesById(1).subscribe(phoneItem =>{
      this.singlePhone = phoneItem;

    })
  }

  /*singlePhone: phone = { id: 1, brand: 'Apple', model: 'iPhone 14', price: 999, isSmartphone: true };*/

  protected readonly phoneList = phoneList
}
