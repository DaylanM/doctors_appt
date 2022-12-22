Appointment.delete_all
Doctor.delete_all
User.delete_all

10.times do
  doctor = Doctor.create(
    first_name: Faker::FunnyName.name,
    last_name: Faker::FunnyName.name,
    practice: Faker::Educator.subject,
  )

  user = User.create(
    first_name: Faker::FunnyName.name,
    last_name: Faker::FunnyName.name,
    dob: '1-1-2000'
  )

  Appointment.create(
    user_id: user.id,
    doctor_id: doctor.id,
    # appt_notes: Faker::Movies::HarryPotter.quote
    # appt_subject: Faker::Movies::HarryPotter.house
    # appt_time: Faker::Time.backward(days: 5, period: :morning, format: :short)
  )
end

puts "# of Doctors"
puts Doctor.all.count

puts "users"
puts User.all.count

puts "Appointment"
puts Appointment.all.count