import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ActorListComponent} from './actor-list/actor-list.component';
import {CinemaListComponent} from './cinema-list/cinema-list.component';
import {CityListComponent} from './city-list/city-list.component';
import {CollectListComponent} from './collect-list/collect-list.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {DirectorListComponent} from './director-list/director-list.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {PlayListComponent} from './play-list/play-list.component';
import {VarietyListComponent} from './variety-list/variety-list.component';
import {RoundListComponent} from './round-list/round-list.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ActorListComponent,
    CinemaListComponent,
    CityListComponent,
    CollectListComponent,
    CustomerListComponent,
    DirectorListComponent,
    MovieListComponent,
    OrdersListComponent,
    RoundListComponent,
    PlayListComponent,
    VarietyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
