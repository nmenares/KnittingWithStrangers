class FixZip < ActiveRecord::Migration[5.2]
  def change
    remove_column :knitting_times, :zip, :integer
    add_column :knitting_times, :zip, :string
  end
end
