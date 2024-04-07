import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../models/vehicle';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private mockVehicles: Vehicle[] = [
    {
      maxNumberOfPassengers: 5,
      transmission: 'Automatic',
      airConditioning: true,
      numberOfDoors: 4,
      fuelType: 'Petrol',
      registration: 'AB123CDE',
      chassisNumber: 'JKGANLKAGNLKGASASD'
    },
    {
      maxNumberOfPassengers: 5,
      transmission: 'Manual',
      airConditioning: true,
      numberOfDoors: 4,
      fuelType: 'Diesel',
      registration: 'ZX987ZXY',
      chassisNumber: 'MNLDSAKDDSADASLM'
    },
    {
      maxNumberOfPassengers: 5,
      transmission: 'Manual',
      airConditioning: true,
      numberOfDoors: 4,
      fuelType: 'Diesel',
      registration: 'GH944ZHG',
      chassisNumber: 'POIWQIPOWQTPI'
    }
  ];

  constructor() { }

  getVozila(): Observable<Vehicle[]> {
    return of(this.mockVehicles);
  }
}