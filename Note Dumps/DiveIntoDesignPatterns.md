# Dive into Design Patterns: Alexander Chvets

# SOLID

## Open/Close

- extend (make new methods or extend into a new class) but don't modify existing methods - or "closed" classes.
- create a child class and override methods if you want to modify them
- a child shouldn't be responsible for the parents problems - you can modify to fix bugs.

## Liskov Substitution
- Parameter types in a method of a subclass should match or
  be more abstract than parameter types in the method of the
  superclass. (.feed(animal) vs .feed(bengalCat))
- The return type in a method of a subclass should match or be
  a subtype of the return type in the method of the superclass.
  ie you override the return type of buyCat(): Cat with buyCat(): Animal (BAD) vs buyCat(): BengalCat (GOOD)
- subclass shouldn't throw types of exceptions the base method doesn't (pretty much an extension of the same return principle?)
- A subclass shouldn’t strengthen pre-conditions. (throwing an error if value is negative when super class accepts all ints)
- a subclass shouldn't weaken post-conditions
- Invariants of a superclass must be preserved.
- A subclass shouldn’t change values of private fields of the
superclass.

## Interface Segregation Principle
