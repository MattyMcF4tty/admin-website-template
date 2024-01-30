interface GeoJSONPoint {
    type: 'Point',
    coordinates: [number, number] // [longitude, latitude]
}
  
interface VehicleSchema {
    id: string,
    createdAt: string,
    fuelPercentage: number,
    type: number,
}

