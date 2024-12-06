import { Pipe, PipeTransform } from '@angular/core';
import {phone} from "../models/phones";

@Pipe({
  name: 'phoneLength',
  standalone: true
})
export class PhoneLengthPipe implements PipeTransform {

  transform(phone: phone,): string {
    return `${phone.model} ${phone.brand}`;
  }

}
