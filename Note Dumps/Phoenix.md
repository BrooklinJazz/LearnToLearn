# Walkthrough notes
- mix ecto.create required change dev.exs postgres username to whoami user and password to ""
- mix phx.server
- start server in iex to debug iex -S mix phx.server

# migations
- mix ecto.gen.migration add_topics       
```
defmodule Discuss.Repo.Migrations.AddTopics do
  use Ecto.Migration

  def change do
    create table(:topics) do
      add :title, :string
    end
  end
end
```
- mix ecto.migrate
- mix phx.server