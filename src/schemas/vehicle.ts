interface GeoJSONPoint {
    type: 'Point',
    coordinates: [number, number] // [longitude, latitude]
}
  
export interface VehicleSchema {
    id: string,
    createdAt: string,
    fuelPercentage: number,
    type: number,
    numberPlate: string,
    state: string,
    reserved: boolean,
}

