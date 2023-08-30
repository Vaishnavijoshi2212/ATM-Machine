import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageApiComponent } from './image-api/image-api.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AtmComponent } from './atm/atm.component';

const routes: Routes = [
  {
  path:'image-api',
  component:ImageApiComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'atm-machine',
    component:AtmComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
