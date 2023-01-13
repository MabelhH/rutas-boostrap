import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { VisionComponent } from './vision/vision.component';
import { MisionComponent } from './mision/mision.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import{ReactiveFormsModule ,FormsModule} from  '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ContactosComponent,
    NosotrosComponent,
    VisionComponent,
    MisionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterOutlet

  ],
  exports:[
    HomeComponent,
    ContactosComponent,
    NosotrosComponent,
    VisionComponent,
    MisionComponent 
  ]
})
export class ComponentesModule { }
