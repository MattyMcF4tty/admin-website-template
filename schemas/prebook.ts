export interface PrebookSchema {
    id: number;
    bookerId: string;
    deliveryDate: Date;
    vehicleTypeId: number;

    deliveryPersonId: string | null;
    deliveredDate: Date | null;
}

export class Prebook {

    // Required information
    private id: number;
    private bookerId: string;
    private deliveryDate: Date;
    private vehicleTypeId: number;

    // Delivery information
    private deliveryPersonId: string | null;
    private deliveredDate: Date | null;
    private deliveredVehicle: number | null


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

    async VehicleType() {

    }

    ChangeDate(newDate: Date) {

    }

    ChangeVehicle(vehicleId: number) {

    }
}


const prebook = new Prebook(232, "sdfsdf", new Date(), 1, null)