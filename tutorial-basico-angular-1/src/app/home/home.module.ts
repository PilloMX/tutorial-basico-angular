import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { CarlistComponent } from './components/carlist/carlist.component';
import { CarformComponent } from './components/carform/carform.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CarlistComponent,
    CarformComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
