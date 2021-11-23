import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';
import { CarroselComponent } from './views/carrosel/carrosel.component';
import { BannerComponent } from './views/banner/banner.component';

const routes: Routes = [
  {
  path: '',
  component:  HomeComponent
  },
  {
    path: '',
    component:  MenuComponent
  },
  {
    path: '',
    component:  BannerComponent
  },
  {
    path: '',
    component:  CarroselComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

