class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor
  validates :appt_subject, :appt_notes, :appt_time, presence: true
end
