import { Component } from '@angular/core';

import {PhoneListComponent} from "../phone-list/phone-list.component";
import {PhoneListItemComponent} from "../phone-list-item/phone-list-item.component";
import {OnInit} from "@angular/core";
import {phone} from "../models/phones";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {catchError, map, of, switchMap} from "rxjs";
import {PhonesService} from "../services/phones.service";

@Component({
  selector: 'app-modify-phone',
  standalone: true,
  imports: [
    NgIf,
    PhoneListComponent,
    PhoneListItemComponent,
    ReactiveFormsModule
  ],
  templateUrl: './modify-phone.component.html',
  styleUrl: './modify-phone.component.css'
})
export class ModifyPhoneComponent  implements OnInit{
  phoneForm: FormGroup;
  phone: phone | undefined;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private phonesService: PhonesService,
    private router: Router
  ) {

    this.phoneForm = this.fb.group({
      id: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      isSmartphone: [false],
      descriptionImage: [''],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.phonesService.getPhones().pipe(
        map((phones) => phones.find((phone) => phone.id === +id)),
        catchError((err) => {
          console.error(err);
          return of(undefined);
        })
      ).subscribe((phone) => {
        if (phone) {
          this.phone = phone;
          this.phoneForm.patchValue(phone); // Populate form with phone data
        }
      });
    }
  }

  onSubmit(): void {
    const updatedPhone: phone = this.phoneForm.value;

    // Check if we're updating an existing phone
    if (this.phone) {
      this.phonesService.updatePhone(updatedPhone); // Update the existing phone
    } else {
      // For adding a new phone, generate a new ID
      const newId = this.phonesService.generateNewId(); // This method should generate a new ID
      updatedPhone.id = newId;
      this.phonesService.addPhone(updatedPhone); // Add new phone
    }

    this.router.navigate(['/']); // Navigate back to the home page after submitting
  }

  onDelete(): void {
    const id = this.phoneForm.get('id')?.value;
    if (id) {
      this.phonesService.deletePhone(id); // Delete the phone
      this.router.navigate(['/']); // Navigate back to the home page
    }
  }

  navigateToPhoneList(): void {
    this.router.navigate(['/']); // Navigate to the phone list
  }
}
