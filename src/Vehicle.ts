export default class Vehicle {
  private availableGas: number
  private travelledDistance: number

  constructor(private consumptionRate: number) {
    this.availableGas = 0
    this.travelledDistance = 0
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

  public isEnoughGasForTravel(travelDistance: number): boolean {
    return this.gasConsumptionForTravel(travelDistance) <= this.availableGas
  }

  private gasConsumptionForTravel(travelDistance: number): number {
    return this.consumptionRate * travelDistance
  }

  public travelDistance(distance: number): void {
    const consumptionForTravel = this.gasConsumptionForTravel(distance)
    if (consumptionForTravel <= this.availableGas) {
      this.travelledDistance += distance
      this.availableGas -= consumptionForTravel
    } else {
      const distanceForAvailableGas = this.distanceForGas(this.availableGas)
      this.travelDistance(distanceForAvailableGas)
      // remaining distance to complete travel
      const remainingDistance = distance - distanceForAvailableGas
    }
  }

  private distanceForGas(gas: number): number {
    return gas / this.consumptionRate
  }

  public getTraveledDistance(): number {
    return this.travelledDistance
  }
}
