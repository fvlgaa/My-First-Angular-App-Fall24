import {Component, OnInit} from '@angular/core';
import {phone} from "../models/phones";
import {PhoneListItemComponent} from "../phone-list-item/phone-list-item.component";
import {PhonesService} from "../services/phones.service";
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [
    PhoneListItemComponent,
    CommonModule
  ],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent implements OnInit {
  phoneList: phone[]=[];

  constructor(private phonesService: PhonesService) { }
  ngOnInit(): void {
    this.phonesService.getPhones().subscribe({
      next: (data : phone[]) => this.phoneList = data,
      error:err => console.error("error fetching phones"),
      complete:()  => console.log("fetching completed"),
    });

  }


}
