# SOLID Design Principles

- `Single Responsibility.`

  - A class should only have one reason to change
  - separation of concerns: different classes handling different independent tasks/problems

- `Open/Close principle`

  - open for extension, closed for modification
  - do not add methods to class
  - avoid state space explosion
  - `Specifications`:
    - new ColorSpecification(Color.green).isSatisfied(product)
    - new SizeSpecification(Size.large).isSatisfied(product)
    - GoodFilter.filter(products, new ColorSpecification(Color.green))
    - BadFilter.filterByColor()
    - BadFilter.filterBySize()
  - `Combinators`: a specification which combines other specifications such as AndSpecification
    - GoodFilter.filter(products, AndSpecification(new ColorSpecification(Color.green), new SizeSpecification(Size.large)))

- `Liskov Substitution Principle`:

  - you should be able to substitute a base type for a subtype
  - doSomething(rectange) should also function with doSomething(square) if square extends rectangle.

- `Interface Segregation Principle`:

  - you shouldn't put too much into an interface : split interfaces (YAGNI)
  - works better in typescript because js has no interfaces or multiple inheritance.
  - you can throw errors in constructor for this.constructor.name = <nameofclass> to enforce abstract class
  - define methods all extended classes must have.
  - `principle of least surprise`: people should not be surprised or see magic behavior.
  - ISP = segregate (split up). don't overload your abstract class with methods the subclasses won't need.

- `Dependency Inversion Principle`:
  - high level modules should not depend on low level modules: use abstractions