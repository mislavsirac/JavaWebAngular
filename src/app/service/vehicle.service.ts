import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../models/vehicle';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor(private http: HttpClient) { }

  getVozila(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>('http://localhost:8080/vehicles');
  }

  getVehicleById(id: string): Observable<Vehicle | undefined> {
    return this.http.get<Vehicle>('http://localhost:8080/vehicles/search/registration/' + id);
  }

  addVehicle(newVehicle: Vehicle) {
    return this.http.post('http://localhost:8080/vehicles', newVehicle, { responseType: 'text' });
  }

  deleteVehicle(vehicleId: string) {
    return this.http.delete<Vehicle>('http://localhost:8080/vehicles/' + vehicleId);
  }  
}