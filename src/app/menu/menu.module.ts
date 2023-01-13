import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NabartComponent } from './nabart/nabart.component';
import { NumberValueAccessor } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    NabartComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports:[
    NabartComponent
  ]
})
export class MenuModule { }
