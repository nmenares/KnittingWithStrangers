class Enrollments < ActiveRecord::Migration[5.2]
  def change
    create_table :knitting_time_enrollments do |t|
      t.integer :user_id, null: false
      t.integer :knittingtime_id, null: false

      t.timestamps
    end
    add_index :knitting_time_enrollments, :user_id
    add_index :knitting_time_enrollments, :knittingtime_id
  end
end
