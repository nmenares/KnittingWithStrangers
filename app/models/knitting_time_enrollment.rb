# == Schema Information
#
# Table name: knitting_time_enrollments
#
#  id              :bigint(8)        not null, primary key
#  user_id         :integer          not null
#  knittingtime_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class KnittingTimeEnrollment < ApplicationRecord
  validates :user_id, :knittingtime_id, presence: true
  validates :user_id, uniqueness: { scope: [:knittingtime_id] }

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :knittingtime,
  foreign_key: :knittingtime_id,
  class_name: :KnittingTime


end
