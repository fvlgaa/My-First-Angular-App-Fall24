import {Component, OnInit} from '@angular/core';
import {phone} from "../models/phones";
import {PhoneListItemComponent} from "../phone-list-item/phone-list-item.component";
import {PhonesService} from "../services/phones.service";
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {CurrencyPipe, LowerCasePipe, NgClass, NgForOf, UpperCasePipe} from "@angular/common";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {PhoneLengthPipe} from "../pipes/phone-length.pipe";

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [
    PhoneListItemComponent,
    CommonModule,
    CurrencyPipe,
    LowerCasePipe,
    NgClass,
    NgForOf,
    UpperCasePipe,
    HoverHighlightDirective,
    RouterLink,
    PhoneLengthPipe
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
