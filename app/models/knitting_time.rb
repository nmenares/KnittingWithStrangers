# == Schema Information
#
# Table name: knitting_times
#
#  id          :bigint(8)        not null, primary key
#  date        :date             not null
#  start_time  :string           not null
#  end_time    :string           not null
#  address_1   :string           not null
#  address_2   :string
#  city        :string           not null
#  state       :string           not null
#  lat         :float
#  lng         :float
#  area_id     :integer          not null
#  host_id     :integer          not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  zip         :string           not null
#

class KnittingTime < ApplicationRecord
  validates :date, :start_time, :end_time, :address_1, :city, :area_id, :host_id, :description, presence: true

  belongs_to :host,
  foreign_key: :host_id,
  class_name: :User

  belongs_to :area,
  foreign_key: :area_id,
  class_name: :Area

  has_many :ktenrollments,
  foreign_key: :knittingtime_id,
  class_name: :KnittingTimeEnrollment

  has_many :users,
  through: :ktenrollments,
  source: :user

end
