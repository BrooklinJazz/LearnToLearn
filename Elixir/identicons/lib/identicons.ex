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

  takes in a string and returns a sequence of charcodes

  # Examples

  iex> Identicons.hash_input("banana")
  [114, 179, 2, 191, 41, 122, 34, 138, 117, 115, 1, 35, 239, 239, 124, 65]
  """
  def hash_input(input) do
    :crypto.hash(:md5, input)
    |> :binary.bin_to_list()
  end
end
