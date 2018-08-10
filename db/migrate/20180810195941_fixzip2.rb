class Fixzip2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :knitting_times, :zip, :string
    add_column :knitting_times, :zip, :string, null: false
  end
end
