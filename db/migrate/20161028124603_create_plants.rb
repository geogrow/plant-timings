class CreatePlants < ActiveRecord::Migration[5.0]
  def change
    create_table :plants do |t|
      t.string :latin_name
      t.string :common_name
      t.string :habitat

      t.timestamps null: false
    end
  end
end
