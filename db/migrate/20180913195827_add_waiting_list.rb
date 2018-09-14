class AddWaitingList < ActiveRecord::Migration[5.2]
  def change
    add_column :knitting_time_enrollments, :going, :boolean
  end
end
