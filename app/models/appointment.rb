class Appointment < ApplicationRecord
  validates :appt_subject, :appt_notes, :appt_time, presence: true
  belongs_to :user
  belongs_to :doctor
end
