import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes} from "@angular/router";
import {PhoneListComponent} from "./app/phone-list/phone-list.component";
import {PhoneListItemComponent} from "./app/phone-list-item/phone-list-item.component";
import {ModifyPhoneComponent} from "./app/modify-phone/modify-phone.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";


const routes:Routes = [
  {path:'', redirectTo: '/phone', pathMatch: 'full'},
  {path: 'phone', component: PhoneListComponent},
  {path: 'phone/:id', component: PhoneListItemComponent},
  {path: 'modify-phone', component: ModifyPhoneComponent},
  {path: '**', component: PageNotFoundComponent},
]
bootstrapApplication(AppComponent, {
  providers:[provideRouter(routes)
  ]
}).then(r => console.log('Bootstrap successful'))
  .catch((err) => console.error(err));
