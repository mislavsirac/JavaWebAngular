import { Route } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { HomeComponent } from './components/home/home.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';

export const APP_ROUTES: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'vehicles/:id', component: VehicleDetailsComponent }
];
