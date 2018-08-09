class KnittingTimes < ActiveRecord::Migration[5.2]
  def change
    create_table :knitting_times do |t|
      t.date :date, null: false
      t.string :start_time, null: false
      t.string :end_time, null: false
      t.string :address_1, null: false
      t.string :address_2
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.float :lat
      t.float :lng
      t.integer :area_id, null: false
      t.integer :host_id, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :knitting_times, :area_id
    add_index :knitting_times, :host_id
  end
end
