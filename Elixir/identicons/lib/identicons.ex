defmodule Identicons do
  @moduledoc """
  Documentation for `Identicons`.
  """

  def main(input) do
    input
    |> hash_input
  end

  @doc """
  hash_input

  takes in a string and returns the same sequence of numbers for the specific string

  # Examples

  iex> Identicons.hash_input("banana")
  [114, 179, 2, 191, 41, 122, 34, 138, 117, 115, 1, 35, 239, 239, 124, 65]

  iex> Identicons.hash_input("orange")
  [254, 1, 214, 122, 0, 45, 250, 15, 58, 192, 132, 41, 129, 66, 236, 205]
  iex> Identicons.hash_input("orange")
  [254, 1, 214, 122, 0, 45, 250, 15, 58, 192, 132, 41, 129, 66, 236, 205]
  """
  def hash_input(input) do
    :crypto.hash(:md5, input)
    |> :binary.bin_to_list()
  end
end
