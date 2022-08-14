class ChangeGreetingToString < ActiveRecord::Migration[6.1]
  def change
    change_column :greetings, :greeting, :string
  end
end
