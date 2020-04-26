export default class Vehicle {
  constructor(private consumptionRate: number) {}

  public getConsumptionRate(): number {
    return this.consumptionRate
  }
}
