# Getting Started

- generate a new project `mix new <projectname>`
- compile module and run in iex `iex -S mix`
- reload/recompile code in iex using `recompile`

# Types
- integer
- string
- tuples: keyname lists
- maps: like objects

# Libs
- Enum: interact with lists i.e. Enum.shuffle
- Map
- get every possible combination of list elements
```
    for suit <- suits, value <- values do
      "#{value} of #{suit}"
    end
```

# Patterns
- immutability
- in OOP methods tend to manipulate their own data
- Elixir transfers data through the pipe: - input -> output. Cards.create_deck |> Cards.shuffle
- method? means the method returns a boolean (not enforced, this is just convention)
- methods are different depending on their inputs so you can have shuffle/0 and shuffle/1