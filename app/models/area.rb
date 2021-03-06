# == Schema Information
#
# Table name: areas
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Area < ApplicationRecord

  validates :name, presence: true, uniqueness: true


  has_many :knitting_times,
  foreign_key: :area_id,
  class_name: :KnittingTime,
  dependent: :destroy


  has_many :enrollments,
  through: :knitting_times,
  source: :ktenrollments,
  dependent: :destroy

  has_many :users,
  through: :enrollments,
  source: :user

end
