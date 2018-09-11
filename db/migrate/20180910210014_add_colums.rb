class AddColums < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :quote, :string
    add_column :users, :story, :text
  end
end
