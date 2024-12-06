import {Component, Input, OnInit} from '@angular/core';
import { phone } from "../models/phones";
import {DecimalPipe} from "@angular/common";
import {NgOptimizedImage} from "@angular/common";
import {CurrencyPipe,UpperCasePipe,LowerCasePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {PhonesService} from "../services/phones.service";
import {phoneList} from "../models/mockPhones.data";


@Component({
  selector: 'app-phone-list-item',
  standalone: true,
  imports: [DecimalPipe, NgOptimizedImage,CurrencyPipe, UpperCasePipe, LowerCasePipe],
  templateUrl: './phone-list-item.component.html',
  styleUrl: './phone-list-item.component.css'
})
export class PhoneListItemComponent implements OnInit {
  phone: any;

  constructor(
    private route: ActivatedRoute,
    private phonesService: PhonesService
  ) {
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.phone = this.phonesService.getPhonesById(+id);
    }

  }
  protected readonly phoneList = phoneList
  @Input() phoneItem!: phone;
}
