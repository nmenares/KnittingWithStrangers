# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  phone           :string
#  description     :text
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#

class User < ApplicationRecord

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :session_token, :email, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true
  validates :username, length: { maximum: 12 }

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :hosted_knitting_times,
  foreign_key: :host_id,
  class_name: :KnittingTime,
  dependent: :destroy

  has_many :enrollments,
  foreign_key: :user_id,
  class_name: :KnittingTimeEnrollment,
  dependent: :destroy

  has_many :knitting_times,
  through: :enrollments,
  source: :knittingtime,
  dependent: :destroy

  # has_one_attached :photo


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
