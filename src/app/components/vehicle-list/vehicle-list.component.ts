import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../models/vehicle';
import { VehicleService } from '../../service/vehicle.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit{

  vehicles: Vehicle[] | undefined;
  selectedVehicle: Vehicle | null = null;
  vehicleForm: FormGroup;
  
  constructor(
    private VehicleService: VehicleService,
    private router: Router
  ) { 
    this.vehicleForm = new FormGroup({
      vehicleCode: new FormControl('', Validators.required),
      maxNumberOfPassengers: new FormControl(0, [Validators.required, Validators.min(1)]),
      transmission: new FormControl('', Validators.required),
      airConditioning: new FormControl(false),
      numberOfDoors: new FormControl(0, [Validators.required, Validators.min(1)]),
      fuelType: new FormControl('', Validators.required),
      mileage: new FormControl(0, [Validators.required, Validators.min(0)]),
      registration: new FormControl('', Validators.required),
      chassisNumber: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.VehicleService.getVozila().subscribe(data => {
      this.vehicles = data;
    });
  }

  deleteVehicle(registration: string): void {
    this.VehicleService.deleteVehicle(registration).subscribe({
      next: (res) => {
        console.log('Vehicle deleted successfully:', res);
        this.VehicleService.getVozila().subscribe(data => {
          this.vehicles = data;
        });
      },
      error: (err) => {
        console.error('Error adding vehicle:', err);
      }
    });
    }

  selectVehicle(vehicle: Vehicle): void {
    this.router.navigate(['/vehicles', vehicle.registration])
  }

  onSubmit(): void {
    const newVehicle: Vehicle = {
      ...this.vehicleForm.value,
      lastServiceDate: new Date(),
      nextServiceDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    };
    this.VehicleService.addVehicle(newVehicle).subscribe({
      next: (res) => {
        console.log('Vehicle added successfully:', res);
        this.VehicleService.getVozila().subscribe(data => {
          this.vehicles = data;
        });
      },
      error: (err) => {
        console.error('Error adding vehicle:', err);
      }
    });
  }
}
