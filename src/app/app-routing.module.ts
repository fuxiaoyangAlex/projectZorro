import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path: 'actorlist', component: ActorListComponent},
  {path: 'cinemalist', component: CinemaListComponent},
  {path: 'citylist', component: CityListComponent},
  {path: 'collectlist', component: CollectListComponent},
  {path: 'customerlist', component: CustomerListComponent},
  {path: 'directorlist', component: DirectorListComponent},
  {path: 'movielist', component: MovieListComponent},
  {path: 'orderslist', component: OrdersListComponent},
  {path: 'playlist', component: PlayListComponent},
  {path: 'roundlist', component: RoundListComponent},
  {path: 'varietylist', component: VarietyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
