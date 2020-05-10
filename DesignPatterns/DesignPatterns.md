# Gamma Categorization

- `Creational`
  - deal with the creation of objects
  - explicit (constructor) vs implicit (DI, reflection, etc)
  - wholesale (single statement) vs piecewise (step-by-step)
- `Structural`
  - concerned with structure of class members
  - many patterns are wrappers that mimic the underlying class' interface
  - stress the importance of good API design
- `Behavioral`
  - unique in their approach

# Design Pattern List

- `Creational`
  - Builder
  - Factories
    - Abstract Factory
    - Factory Method
    - Prototype
    - Singleto

- `Structural`

  - Adapter
  - Bridge
  - Composite
  - Facade
  - Flyweight
  - Proxy

- `Behavioral`

  - Chain of Responsibility
  - Command
  - Interpreter
  - Iterator
  - Mediator
  - Memento
  - Observer
  - State
  - Strategy
  - Template Method
  - Visitor

# Design Patterns
- `Builder`:
  - when piecewise object construction is complicated provide an API for doing it succinctly
  - exercise: https://www.udemy.com/course/design-patterns-javascript/learn/quiz/4631998#overview

- `Factory`:
  - wholesale object creation
  - A separate Method: `Factory Method`
  - That may exist in a separate class `Factory`
  - can Create a hierarchy of factories with `Abstract Factory`
  - Abstract meaning that is has methdods as a "guide" for how to use it to extend other factories

- `Prototype`
  - An existing (partially or fully constructed) design is a prototype
  - make a copy (clone) the prototype and customize it
    - requires deep copy support
    - make cloning easy via factory
  - explicit copying becomes difficult given complex class trees
  - copy through serialization JSON.parse(JSON.stringify(myClassInstance)) // only copies data