import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { HomeComponent } from './componentes/home/home.component';
import { MisionComponent } from './componentes/mision/mision.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { VisionComponent } from './componentes/vision/vision.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contactos',component:ContactosComponent},
  {path:'nosotros', component:NosotrosComponent ,
  children:[
    {path:'mision',component:MisionComponent},
    {path:'vision',component:VisionComponent},
    {path:'**',redirectTo:'mision' ,pathMatch:'full'}
  ]},
  {path:'**',pathMatch:'full',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
