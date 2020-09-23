import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Pract1Component } from './pract1/pract1.component';
import { Pract2Component } from './pract2/pract2.component';
import { Pract3Component } from './pract3/pract3.component';
import { Pract4Component } from './pract4/pract4.component';
import { Pract5Component } from './pract5/pract5.component';
import { Pract6Component } from './pract6/pract6.component';
import { Pract7Component } from './pract7/pract7.component';
import { Pract8Component } from './pract8/pract8.component';


const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
}, {
  path: 'home',  component: HomeComponent
},{
  path: 'pract1',  component: Pract1Component
},{
  path: 'pract2',  component:Pract2Component
},{
  path: 'pract3',  component: Pract3Component
},{
  path: 'pract4',  component: Pract4Component
},{
  path: 'pract5',  component: Pract5Component
},{
  path: 'pract6',  component: Pract6Component
},{
  path: 'pract7',  component: Pract7Component
},{
  path: 'pract8',  component: Pract8Component
},{
  path: '**', redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
