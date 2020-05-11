# Cards

## basics

- generate a new project `mix new <projectname>`
- compile module and run in iex `iex -S mix`
- modules and methods. run using module.method or module.method()
- list = [] (just like array)
  - convention is to use double quotes throughout all of your elixir code ["one", "two"]
- reload/recompile code in iex using `recompile`

## functional design patterns

- OOP tends to have class methods that work on it's local data
- immutability
- input -> output. Cards.create_deck |> Cards.shuffle
- method? means the method returns a boolean (not enforced, this is just convention)
- methods are different depending on their inputs so you can have shuffle/0 and shuffle/1

# Lists

- Enum.shuffle
- for loops and comprehensions

```elixir
for suit <- suits do
      suit
    end
```

- get every possible combination of list elements

```
    for suit <- suits, value <- values do
      "#{value} of #{suit}"
    end
```

- tuple is like an indexed array where the order specifies some meaning
  - {hand, cards} = Cards.deal(deck, 5) returns a Tuple with the first element hand, second element cards

# Erlang

- BEAM Bogdang erlands Abstract Machine -> A VM on which the erlang code gets executed.

# Maps

```iex
color = %{primary: "red"}
iex> colors.primary
"red"
```

- can use pattern matching to assign variables

# Tuples

- key word lists
- unlike maps, can have many items with the same key.
