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

    get Update() {
        return new PrebookUpdater(this)
    }

    get Get() {
        return new PrebookGetter(this)
    }

}


/**
 * Update allows you to update current prebooks½½ values
 */
class PrebookUpdater {
    prebook: Prebook
    constructor(prebook: Prebook) {
        this.prebook = prebook
    }

    async orderDetails(newBookerId: number, newDeliveryDate: Date, newVehicleId: number) {

    }

    async deliveryDetails(newDeliveryPersonId: number, newDeliveryDate: Date, newVehicleId: number) {

    }

}

class PrebookGetter {
    prebook: Prebook
    constructor(prebook: Prebook) {
        this.prebook = prebook
    }

    async DeliveryPerson() {

    }

    async Booker() {

    }

    async DeliveredVehicle() {

    }

    async OrderedVehicleType() {

    }

}