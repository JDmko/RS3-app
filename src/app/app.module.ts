import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Rs3RoutingModule } from './rs3/rs3-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { Rs3Component } from './rs3/rs3.component';
import { SchemaKotelnyComponent } from './rs3/data/schema-kotelny/schema-kotelny.component';
import { OdvodneniComponent } from './rs3/data/odvodneni/odvodneni.component';
import { NahratiComponent } from './rs3/data/nahrati/nahrati.component';
import { KontrolaOneComponent } from './rs3/data/kontrola-one/kontrola-one.component';
import { UzavrenipropojeniComponent } from './rs3/data/uzavrenipropojeni/uzavrenipropojeni.component';
import { OtevreniRsComponent } from './rs3/data/otevreni-rs/otevreni-rs.component';
import { UvedeniDoProvozuComponent } from './rs3/data/uvedeni-do-provozu/uvedeni-do-provozu.component';
import { KontrolaTwoComponent } from './rs3/data/kontrola-two/kontrola-two.component';
import { PropojeniComponent } from './rs3/data/propojeni/propojeni.component';
import { OdpojeniComponent } from './rs3/data/odpojeni/odpojeni.component';
import { OdpojenirsComponent } from './rs3/data/odpojenirs/odpojenirs.component';
import { OdstavenirsComponent } from './rs3/data/odstavenirs/odstavenirs.component';
import { OtevreniPropojeniComponent } from './rs3/data/otevreni-propojeni/otevreni-propojeni.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SchemaKotelnyComponent,
    Rs3Component,
    OdvodneniComponent,
    NahratiComponent,
    KontrolaOneComponent,
    UzavrenipropojeniComponent,
    OtevreniRsComponent,
    UvedeniDoProvozuComponent,
    KontrolaTwoComponent,
    PropojeniComponent,
    OdpojeniComponent,
    OdpojenirsComponent,
    OdstavenirsComponent,
    OtevreniPropojeniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Rs3RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }