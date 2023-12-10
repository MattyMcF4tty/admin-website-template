export interface PrebookSchema {
    id: number;
    customerId: string;
    scheduledDeliveryDate: Date;
    bookedVehicleTypeId: number;

    delivererId: string | null;
    deliveredDate: Date | null;
    deliveredVehicleId: number | null;

    createdAt: Date | null;
}

export class Prebook implements PrebookSchema{

    // Required information
    id: number;
    customerId: string;
    scheduledDeliveryDate: Date;
    bookedVehicleTypeId: number;

    // Delivery information
    delivererId: string | null;
    deliveredDate: Date | null;
    deliveredVehicleId: number | null

    createdAt: Date | null;

    constructor(id: number, customerId: string, scheduledDeliveryDate: Date, bookedVehicleTypeId: number, delivererId?: string | null, deliveredDate?: Date | null, deliveredVehicleId?: number | null, createdAt?: Date | null) {
        this.id = id;
        this.customerId = customerId;
        this.scheduledDeliveryDate = scheduledDeliveryDate;
        this.bookedVehicleTypeId = bookedVehicleTypeId;

        this.delivererId = delivererId || null;
        this.deliveredDate = deliveredDate || null;
        this.deliveredVehicleId = deliveredVehicleId || null;

        this.createdAt = createdAt || null;
    }

    cancel() {

    }

    deliver(userId:string, vehicleId:string) {

    }

    async GetVehicle() {

    }

    isDelivered() {
        if (!this.deliveredDate) {
            return false
        }
        return true
    }

    toPlainObject(): PrebookSchema{
        return {
            id: this.id, 
            customerId: this.customerId, 
            scheduledDeliveryDate: this.scheduledDeliveryDate,
            bookedVehicleTypeId: this.bookedVehicleTypeId,
            delivererId: this.delivererId,
            deliveredDate: this.deliveredDate,
            deliveredVehicleId: this.deliveredVehicleId,
            createdAt: this.createdAt
        }
    }

    get update() {
        return new PrebookUpdater(this)
    }

    get get() {
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