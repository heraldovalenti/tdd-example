# Test-Driven Development practical example

This small project is about a simple yet meaninful practical example of how Test-Driven Development (TDD) can be used.
TDD is a technique for building software that guides software development by writing tests [(1)](https://martinfowler.com/bliki/TestDrivenDevelopment.html). The technique consists in three basic steps:

1. Write a (failing) test.
2. Write the functional code until the test passes.
3. Refactor code to improve its structure.

# The requirement

We need to develop a class that represents a vehicle, and it should provide the means to:

- Configure the vehicle with a consuption rate by distance.
- Travel a given distance.
- Tell if there is enough gas to travel the distance.
- Record the state of the traveled and remaining distance (if any).

# Explanation

Some commits has added tests which represents step 1, and then a following commit representing step 2.
In commit tagged as "refactor" a small refactor is performed, which represents step 3.

# Running the project

The project is implemented using Typescript to demonstrate "compilation" (transpilation) failures and tests are implemented using Jest.
To run the project just install dependencies with `npm i` and then run tests with `npm t`.
