export interface PrebookSchema {
    id: number;
    bookerId: string;
    deliveryDate: Date;
    vehicleTypeId: number;

    deliveryPersonId: string | null;
    deliveredDate: Date | null;
}

export class Prebook implements PrebookSchema{

    // Required information
    id: number;
    bookerId: string;
    deliveryDate: Date;
    vehicleTypeId: number;

    // Delivery information
    deliveryPersonId: string | null;
    deliveredDate: Date | null;
    deliveredVehicle: number | null


    constructor(id: number, bookerId: string, deliveryDate: Date, vehicleTypeId: number, deliveryPersonId?: string | null, deliveredDate?: Date | null, deliveredVehicle?: number | null) {
        this.id = id;
        this.bookerId = bookerId;
        this.deliveryDate = deliveryDate;
        this.vehicleTypeId = vehicleTypeId;

        this.deliveryPersonId = deliveryPersonId || null;
        this.deliveredDate = deliveredDate || null;
        this.deliveredVehicle = deliveredVehicle || null;
    }

    Delete() {

    }

    Deliver(userId:string, vehicleId:string) {

    }

    async GetVehicle() {

    }

    IsDelivered() {
        if (!this.deliveredVehicle) {
            return false
        }
        return true
    }

    get update() {
        return new UpdatePrebook
    }



}


/**
 * Update allows you to update current prebooks½½ values
 */
class UpdatePrebook {
    constructor() {}

    async ChangeVehicle(newVehicleId: number) {
        // logic to update the vehicle
    }

    async ChangeDate(newDate: Date): Promise<void> {
        // logic to update the date
    }
}