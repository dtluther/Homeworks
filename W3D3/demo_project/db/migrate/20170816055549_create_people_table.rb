class CreatePeopleTable < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.string :name, null: false
      t.integer :house_id, null: false

      t.timestamps
    end

    add_index :name, :house_id
  end
end