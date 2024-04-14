export interface Vehicle {
    vehicleCode: string
    maxNumberOfPassengers: number;
    transmission: string;
    airConditioning: boolean;
    numberOfDoors: number;
    fuelType: string;
    lastServiceDate: Date;
    nextServiceDate: Date;
    mileage: number;
    registration: string;
    chassisNumber: string;
  }