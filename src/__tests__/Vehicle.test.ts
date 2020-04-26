import Vehicle from '../Vehicle'

describe('Vehicle should allow configuration of gas consumption rate', () => {
  test('create a vehicle with a given gas consumption rate', () => {
    const consumptionRate = 1.5
    const car = new Vehicle(consumptionRate)
    expect(car.getConsumptionRate()).toBe(consumptionRate)
  })
})
