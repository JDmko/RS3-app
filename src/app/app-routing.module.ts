import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Rs3Component } from './rs3/rs3.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rs3', component: Rs3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
