# Getting Started

- generate a new project `mix new <projectname>`
- compile module and run in iex `iex -S mix`
- reload/recompile code in iex using `recompile`
- generate docs
  - add ex_doc
    ```
  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:ex_doc, "~> 0.12"}
    ]
  end
    ```
  - get dependencies `mix deps.get`
  - generate doc `mix docs`
  - open doc/index.html in the browser to view docs
- run tests using `mix test`

# Types
- integer
- string
- tuples: keyname lists {"el1", "el2"}
- lists: ["1", "2"]
  - keyword lists: [{:primary: "red"}, {:secondary: "blue"}]
    - returns [primary: "red", secondary: "blue"]
- maps: like objects %{key: value}
  - can use obj syntax map.key
- atoms :my_atom
- booleans

- tuples vs lists
  - Tuples: Faster Accessing & Sizing. Expensive Updating
  - Lists: Linked Lists - Expensive to Traverse. Prepending = fast. Postpending = slow

# Libs
- Enum: interact with lists i.e. Enum.shuffle
- Map
- get every possible combination of list elements
```
    for suit <- suits, value <- values do
      "#{value} of #{suit}"
    end
```
- File

# Patterns
- immutability
- in OOP methods tend to manipulate their own data
- Elixir transfers data through the pipe: - input -> output. Cards.create_deck |> Cards.shuffle
- method? means the method returns a boolean (not enforced, this is just convention)
- methods are different depending on their inputs so you can have shuffle/0 and shuffle/1
- pattern matching: {var1, var2} = {"varValue1", "varValue2"}
- error handling
```
  def load(filename) do
    case File.read(filename) do
      {:ok, binary} -> :erlang.binary_to_term(binary)
      {:error, _reason} -> "file #{filename} does not exist"
    end
  end
```
- piping
```
  def create_hand(size) do
    Cards.create_deck()
    |> Cards.shuffle()
    |> Cards.deal(size)
  end
```
- refute: can use instead of !=
- test example
```
 test "shuffle _ randomizes deck" do
  deck = Cards.create_deck
  refute deck == Cards.shuffle(deck)
 end
```
