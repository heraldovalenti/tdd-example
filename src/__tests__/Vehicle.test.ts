import Vehicle from '../Vehicle'

describe('Vehicle should allow configuration of gas consumption rate', () => {
  test('create a vehicle with a given gas consumption rate', () => {
    const consumptionRate = 1.5
    const car = new Vehicle(consumptionRate)
    expect(car.getConsumptionRate()).toBe(consumptionRate)
  })
})

describe('Vehicle should allow to load gas and inform the gas status', () => {
  test('A new vehicle has no gas', () => {
    const car = new Vehicle(1.5)
    expect(car.getAvailableGas()).toBe(0)
  })
  test('Available gas should be the loaded amount', () => {
    const car = new Vehicle(1.5)
    car.loadGas(100)
    expect(car.getAvailableGas()).toBe(100)
  })
  test('Loaded gas amount should be acumulative', () => {
    const car = new Vehicle(1.5)
    car.loadGas(100)
    car.loadGas(20)
    expect(car.getAvailableGas()).toBe(120)
  })
})
