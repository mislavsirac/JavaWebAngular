import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../models/vehicle';
import { VehicleService } from '../../service/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit{
  vehicles: Vehicle[] | undefined;
  selectedVehicle: Vehicle | null = null;

  constructor(private VehicleService: VehicleService) { }

  ngOnInit() {
    this.VehicleService.getVozila().subscribe(data => {
      this.vehicles = data;
    });
  }

  selectVehicle(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }
}
