import {Component, OnInit} from '@angular/core';
import {phone} from "../models/phones";
import {PhoneListItemComponent} from "../phone-list-item/phone-list-item.component";
import {PhonesService} from "../services/phones.service";
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";

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
  //deleted: boolean = true;


  // displayColomus:String[]=['id', 'model','brand', 'price',  'name', 'isSmartPhone', 'ImageUrl'];

  phoneList: phone[]=[];

  constructor(private phonesService: PhonesService,
              private router: Router) { }
  ngOnInit(): void {
    this.phonesService.getPhones().subscribe({
      next: (data : phone[]) => this.phoneList = data,
      error:err => console.error("error fetching phones"),
      complete:()  => console.log("fetching completed"),
    });

  }
  //redirect to the form
  onEdit(): void {
    this.router.navigate(['/modify-phone']);
  }

  onDelete(phoneId: number): void {

    this.phonesService.deletePhone(phoneId);
  }


  selectedPhoneItem?: phone;
  selectedPhone(phone: phone): void{
    this.selectedPhoneItem = phone;
  }


}
