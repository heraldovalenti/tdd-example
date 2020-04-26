export default class Vehicle {
  private availableGas: number

  constructor(private consumptionRate: number) {
    this.availableGas = 0
  }

  public getConsumptionRate(): number {
    return this.consumptionRate
  }

  public getAvailableGas(): number {
    return this.availableGas
  }

  public loadGas(gasAmount: number): void {
    this.availableGas += gasAmount
  }
}
