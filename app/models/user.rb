class User < ApplicationRecord
  validates :first_name, :last_name, :dob, presence: true
  has_many :appointments, dependent: :destroy
  has_many :doctors, through: appointments
end
