import { Injectable } from '@angular/core';
import {phone} from "../models/phones";
import {phoneList} from "../models/mockPhones.data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
  private phones: phone[] = phoneList;


  constructor() { }
  getPhones(): Observable<phone[]>{
    return of(phoneList);
  }

  addPhone(newPhone: phone): Observable<phone[]>{
    this.phones.push(newPhone);
    return of (this.phones);

  }

  updatePhone (updatedPhone: phone): Observable<phone[]>{
    const index = this.phones.findIndex(p => p.id === updatedPhone.id);
    if (index !== -1) {
      this.phones[index] = updatedPhone;
    }
    return of(this.phones);
  }
  deletePhone(id: number): Observable<phone[]> {
      this.phones = this.phones.filter(p => p.id === id);
      return of (this.phones);
  }
  getPhonesById(id: number): Observable< phone | undefined>{
    const PHone = this.phones.find(p => p.id === id);
    return of(PHone);

  }

  generateNewId(): number {
    return this.phones.length > 0 ? Math.max(...this.phones.map(p => p.id)) + 1 : 1;
  }
}
