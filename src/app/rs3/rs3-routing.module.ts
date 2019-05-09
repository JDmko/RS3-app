import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchemaKotelnyComponent} from './data/schema-kotelny/schema-kotelny.component';
import { Rs3Component } from './rs3.component';
import { OdvodneniComponent } from './data/odvodneni/odvodneni.component';
import { NahratiComponent } from './data/nahrati/nahrati.component';
import { KontrolaOneComponent } from './data/kontrola-one/kontrola-one.component';
import { UzavrenipropojeniComponent } from './data/uzavrenipropojeni/uzavrenipropojeni.component';
import { OtevreniRsComponent } from './data/otevreni-rs/otevreni-rs.component';
import { UvedeniDoProvozuComponent } from './data/uvedeni-do-provozu/uvedeni-do-provozu.component';
import { KontrolaTwoComponent } from './data/kontrola-two/kontrola-two.component';
import { PropojeniComponent } from './data/propojeni/propojeni.component';
import { OdpojeniComponent } from './data/odpojeni/odpojeni.component';
import { OdpojenirsComponent } from './data/odpojenirs/odpojenirs.component';
import { OdstavenirsComponent } from './data/odstavenirs/odstavenirs.component';
import { OtevreniPropojeniComponent } from './data/otevreni-propojeni/otevreni-propojeni.component';

const rs3RoutingModule: Routes = [
    {path: 'rs3', component: Rs3Component, children: [{path: 'schema-kotelny', component:SchemaKotelnyComponent}]},
    {path: 'rs3', component: Rs3Component, children: [{path: 'odvodneni', component:OdvodneniComponent}]},
    {path: 'rs3', component: Rs3Component, children: [{path: 'nahrati', component:NahratiComponent}]},
    {path: 'rs3', component: Rs3Component, children: [{path: 'kontrola-one', component:KontrolaOneComponent}]},
    {path: 'rs3', component: Rs3Component, children: [{path: 'uzavrenipropojeni', component:UzavrenipropojeniComponent}]},
    {path: 'rs3', component: Rs3Component, children: [{path: 'otevreni-rs', component:OtevreniRsComponent}]},
    {path: 'rs3', component: Rs3Component, children: [{path: 'uvedeni-do-provozu', component:UvedeniDoProvozuComponent}]},
    {path: 'rs3', component: Rs3Component, children: [{path: 'kontrola-two', component:KontrolaTwoComponent}]},
    {path: 'rs3', component: Rs3Component, children: [{path: 'propojeni', component:PropojeniComponent}]},
    {path: 'rs3', component: Rs3Component, children: [{path: 'odpojeni', component:OdpojeniComponent}]},
    {path: 'rs3', component: Rs3Component, children: [{path: 'odpojenirs', component:OdpojenirsComponent}]},
    {path: 'rs3', component: Rs3Component, children: [{path: 'odstavenirs', component:OdstavenirsComponent}]},
    {path: 'rs3', component: Rs3Component, children: [{path: 'otevreni-propojeni', component:OtevreniPropojeniComponent}]}


    
  ];

  @NgModule({
    imports: [RouterModule.forChild(rs3RoutingModule)],
    exports: [RouterModule]
  })
  export class Rs3RoutingModule { }