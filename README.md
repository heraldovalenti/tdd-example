# Test-Driven Development practical example
This small project is about a simple yet meaninful practical example of how Test-Driven Development (TDD) can be used.
TDD is a technique for building software that guides software development by writing tests [(1)](https://martinfowler.com/bliki/TestDrivenDevelopment.html). The technique consists in three basic steps:
1. Write a (failing) test.
2. Write the functional code until the test passes.
3. Refactor code to improve its structure.

# The requirement
We need to develop a class that represents a vehicle, and it should provide the means to:
* Configure the vehicle with a consuption rate by distance.
* Travel a given distance.
* Tell if there is enough gas to travel the distance.
* Record the state of the traveled and remaining distance (if any).


