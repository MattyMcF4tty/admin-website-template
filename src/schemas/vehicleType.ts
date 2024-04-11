export interface VehicleTypeSchema {
  id: string;
  brand: string;
  model: string;
  range: number;
  description: string | null;
  fuelType: string;
  createdAt: Date;
}

export class VehicleType implements VehicleTypeSchema {
  id: string;
  brand: string;
  model: string;
  range: number;
  description: string | null;
  fuelType: string;
  createdAt: Date;

  constructor(vehicleTypeData: VehicleTypeSchema) {
    this.id = vehicleTypeData.id;
    this.brand = vehicleTypeData.brand;
    this.model = vehicleTypeData.model;
    this.range = vehicleTypeData.range;
    this.description = vehicleTypeData.description;
    this.fuelType = vehicleTypeData.fuelType;
    this.createdAt = vehicleTypeData.createdAt;
  }
}
