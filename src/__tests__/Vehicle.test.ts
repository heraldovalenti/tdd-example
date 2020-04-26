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

describe('Vehicle should tell if there is enough gas to make a travel', () => {
  test('If vehicle has no gas then travel cannot be made', () => {
    const car = new Vehicle(1.5)
    expect(car.getAvailableGas()).toBe(0)
    expect(car.isEnoughGasForTravel(1.5)).toBeFalsy()
  })
  test('For a rate of 1.5 and 1.5 of gas, I can make a travel of distance 1', () => {
    const car = new Vehicle(1.5)
    car.loadGas(1.5)
    expect(car.getAvailableGas()).toBe(1.5)
    expect(car.isEnoughGasForTravel(1)).toBeTruthy()
  })
  test('For a rate of 1.5 and 1.5 of gas, I can make a travel of distance 0.9', () => {
    const car = new Vehicle(1.5)
    car.loadGas(1.5)
    expect(car.getAvailableGas()).toBe(1.5)
    expect(car.isEnoughGasForTravel(0.9)).toBeTruthy()
  })
  test('For a rate of 1.5 and 1.5 of gas, I cannot make a travel of distance 1.1', () => {
    const car = new Vehicle(1.5)
    car.loadGas(1.5)
    expect(car.getAvailableGas()).toBe(1.5)
    expect(car.isEnoughGasForTravel(1.1)).toBeFalsy()
  })
})

describe('Vehicle allow to travel and record traveled distance', () => {
  test('Vehicle records traveled distance', () => {
    const car = new Vehicle(1.5)
    car.loadGas(15)
    car.travelDistance(10)
    expect(car.getTraveledDistance()).toBe(10)
  })
  test('Vehicle records remaining gas', () => {
    const car = new Vehicle(1.5)
    car.loadGas(15)
    car.travelDistance(5)
    expect(car.getAvailableGas()).toBe(7.5)
  })
  test('Vehicle acumulates traveled distances', () => {
    const car = new Vehicle(1.5)
    car.loadGas(15)
    car.travelDistance(5)
    expect(car.getTraveledDistance()).toBe(5)
    car.travelDistance(5)
    expect(car.getTraveledDistance()).toBe(10)
  })
  test('Vehicle does not travel distances beyond available gas', () => {
    const car = new Vehicle(1.5)
    car.loadGas(15)
    car.travelDistance(15)
    expect(car.getTraveledDistance()).toBe(10)
  })
  test('Vehicle available gas is zero after travelling a distance greater than possible', () => {
    const car = new Vehicle(1.5)
    car.loadGas(15)
    car.travelDistance(15)
    expect(car.getAvailableGas()).toBe(0)
  })
})
