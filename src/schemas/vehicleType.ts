export interface VehicleTypeSchema {
    id: string;
    brand: string;
    model: string;
    range: number;
    description: string;
    fuelType: string;
    createdAt: Date;
}

export class VehicleType implements VehicleTypeSchema {
    id: string;
    brand: string;
    model: string;
    range: number;
    description: string;
    fuelType: string;
    createdAt: Date;

    constructor(id: string, brand: string, model: string, range: number, desription:string, fuelType:string, createdAt:Date) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.range = range;
        this.description = desription;
        this.fuelType = fuelType;
        this.createdAt = createdAt;
    }
}