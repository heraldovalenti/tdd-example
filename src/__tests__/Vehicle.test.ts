import Vehicle from '../Vehicle'

test('create a vehicle', () => {
  const car = new Vehicle()
  expect(car).not.toBeUndefined()
})
