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
end

puts "# of Doctors"
puts Doctor.all.count

puts "users"
puts User.all.count

puts "Appointment"
puts Appointment.all.count