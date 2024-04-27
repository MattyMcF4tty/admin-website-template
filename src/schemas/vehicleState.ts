export interface VehicleStateSchema {
  id: number;
  name: string;
  color: string;
}

/* export class VehicleState implements VehicleStateSchema {
  id: number;
  name: string;
  color: string;

  constructor(stateData: VehicleStateSchema) {
    this.id = stateData.id;
    this.name = stateData.name;
    this.color = stateData.color;
  }

  toPlainObject(): VehicleStateSchema {
    return {
      id: this.id,
      name: this.name,
      color: this.color,
    };
  }
} */
