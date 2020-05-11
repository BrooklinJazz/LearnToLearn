defmodule Identicon do
  @moduledoc """
  Documentation for `Identicon`.
  """

  def main(input) do
    input
    |> hash_input
    |> hash_to_image
    |> pick_color
  end

  @doc """
  hash_input

  takes in a string and returns the same sequence of numbers for the specific string

  # Examples

  iex> Identicon.hash_input("banana")
  [114, 179, 2, 191, 41, 122, 34, 138, 117, 115, 1, 35, 239, 239, 124, 65]
  """
  def hash_input(input) do
    hex = :crypto.hash(:md5, input)
    |> :binary.bin_to_list()
  end

  def hash_to_image(hex) do
    %Identicon.Image{hex: hex}
  end

  def pick_color(image) do
    %Identicon.Image{hex: [r, g, b | _tail]} = image
    [r,g, b]
  end

end
