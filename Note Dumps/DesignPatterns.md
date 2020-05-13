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
  - to implement
    - 1. partially construct an object and store it somewhere
    - 2. deep copy the prototype
    - 3. costumize the resulting instance
    - 4. a factory provides a convenient API for using prototypes

- `Singleton`
  - some people (Erich Gamma thinks it's a design smell)
  - for some components it only makes sense to have one in the system
  - for example: when the constructor is expensive and doesn't need to be done multiple times.
  - want to prevent anyone creating additional copies
  - implementation
    - 1. if this.constructor.instance return instance else create instance
    - `Monostate` using getters and setters means that each instance is shared (??) didn't know that. not recommended
  - use dependencies in the contructor to avoid the dependency inversion principle

- `Adapter`
  - when you are constrained to use a particular API
  - for example when you have an API that only draws points, but need to generate lines
  - you need some translation layer (an adapter) that acts like an interface to the API to convert it do have a different behavior i.e. LineToPointAdapter

- `Bridge`
  - prevents a Cartesian product (wut?) complexity explosion `Cartesian-product duplication`
  - example: many shape classes and methods of rendering = too many classes = state space explosion
  - avoid this using a bridge between two hierarchies
  - e.g. you have 2 heirarchies Renderer and Shape with multiple sub classes of each
    - instead of making every sub class combination, you use a bridge so each renderer has the same methods for interacting with the different shape classes. This still has problems because you have to make methods for every type of shape.
    - meaning we don't have many classes - but we do still have many methods
  - decouple abstraction from implementation
  - Both can exist as hierarchies
  - A stronger form of encapsulation

- Composite
  - used to treat both single (scalar?) and composite objects uniformly
  - Objects use other objects fields/methods through inheritance and composition
  - `compound objects`
  - treating objects and collections of objects in a uniform manner
  - Use [Symbole.iterator](){return {next: () => ({value: this, done: returned++})}}
    - to make a single object iterable.
    - need aggregation to combine classes since there's no composition in js

- `Decorator`
  - used when we want to augment existing functionality
    - do not want to rewrite or alter existing code (Open/Close)
    - want to keep new functionality separate (Single Responsibility)
    - Need to be able to interact with existing structures.
  - A decorator keeps the reference to the decorated objects
  - Adds utility fields and methods to augment the objects features
  - May or may not forward calls to the underlying object

I didn't like the decorator implementation, but it seemed a lot like a HOC where we wrap the class with something else that gives it more functionality/properties. However in this case you also extend the base class for some reasons. Honestly just a bad code example and I need to find something better.


- Facade

- Flyweight
- Proxy
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

# Todo
- write al of the use cases inside a different formatting for the above.