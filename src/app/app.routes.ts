import { Route } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';

export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehicleListComponent }
];
