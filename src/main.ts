import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes} from "@angular/router";
import {PhoneListComponent} from "./app/phone-list/phone-list.component";
import {PhoneListItemComponent} from "./app/phone-list-item/phone-list-item.component";


const routes:Routes = [
  {path: 'phone', component: PhoneListComponent},
  {path: 'phone/:id', component: PhoneListItemComponent},
]
bootstrapApplication(AppComponent, {
  providers:[provideRouter(routes)
  ]
})
  .catch((err) => console.error(err));
