import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DatepickerModule} from "ng2-bootstrap";
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { AlertModule } from 'ng2-bootstrap/alert';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { ModalModule } from 'ng2-bootstrap/modal';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { RatingModule } from 'ng2-bootstrap/rating';
import { TabsModule } from 'ng2-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule.forRoot(),
    DropdownModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    RatingModule.forRoot(),
    TabsModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
