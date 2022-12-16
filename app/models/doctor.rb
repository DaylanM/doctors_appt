class Doctor < ApplicationRecord
  validates :first_name, :last_name, :practice, presence: true
  has_many :appointments, dependent: :destroy
  has_many :users, through: appointments
end
