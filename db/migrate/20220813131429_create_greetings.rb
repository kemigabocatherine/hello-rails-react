class CreateGreetings < ActiveRecord::Migration[6.1]
  def change
    create_table :greetings do |t|
      t.text :greeting

      t.timestamps
    end
  end
end
