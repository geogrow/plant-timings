class CreateStands < ActiveRecord::Migration
  def change
    create_table :stands do |t|
      t.decimal :max_lat, :precision => 15, :scale => 13
      t.decimal :min_lat, :precision => 15, :scale => 13
      t.decimal :max_long, :precision => 15, :scale => 13
      t.decimal :min_long, :precision => 15, :scale => 13

      t.timestamps null: false
    end
  end
end
