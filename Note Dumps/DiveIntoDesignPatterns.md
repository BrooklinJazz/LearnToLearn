# Dive into Design Patterns: Alexander Chvets

# SOLID

- Open/Close
  - extend (make new methods or extend into a new class) but don't modify existing methods - or "closed" classes.
  - create a child class and override methods if you want to modify them
  - a child shouldn't be responsible for the parents problems - you can modify to fix bugs.
- Liskov Substitution
  - Parameter types in a method of a subclass should match or
    be more abstract than parameter types in the method of the
    superclass. (.feed(animal) vs .feed(bengalCat))
  - The return type in a method of a subclass should match or be
    a subtype of the return type in the method of the superclass.
    ie you override the return type of buyCat(): Cat with buyCat(): Animal (BAD) vs buyCat(): BengalCat (GOOD)
