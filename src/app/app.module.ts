import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { ArrayComponent } from './array/array.component';
import { SimpleComponent } from './simple/simple.component';
import { TabsComponent } from './tabs/tabs.component';
import { IdentificationComponent } from './tabs/identification/identification.component';
import { AddressComponent } from './tabs/address/address.component';
import { AliasesComponent } from './tabs/aliases/aliases.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    SimpleComponent,
    TabsComponent,
    IdentificationComponent,
    AddressComponent,
    AliasesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
