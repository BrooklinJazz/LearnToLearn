defmodule CardsTest do
  use ExUnit.Case
  doctest Cards

 test "create_deck _ 20 cards expected" do
   deck_length = length(Cards.create_deck)
   assert(deck_length) == 20
 end

 test "shuffle _ randomizes deck" do
  deck = Cards.create_deck
  refute deck == Cards.shuffle(deck)
 end
end
