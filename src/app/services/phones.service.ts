import { Injectable } from '@angular/core';
import {phone} from "../models/phones";
import {phoneList} from "../models/mockPhones.data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
  private phone: phone[] = phoneList;


  constructor() { }
  getPhones(): Observable<phone[]>{
    return of(phoneList);
  }
}
