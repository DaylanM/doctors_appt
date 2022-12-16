import {useState, useEffect} from 'react';
import axios from 'axios';
//import DoctorList from './DoctorList'
//import DoctorForm from './DoctorForm'

const Doctors = () => {
  const [doctors,setDoctors] = useState ([])

  useEffect (() => {},[])

  const addDoctor = (doctor) => {
    axios.post('/api/doctors', {doctor})
    .then (res => setDoctors([...doctors, res.data]))
    .catch (err =>console.log(err))
  }

  const updateDoctor = (id, Doctor) => {
    axios.put(`/api/doctors/${id}`, {doctor})
    .then(res => {
      const newUpdatedDoctor = doctors.map (d => {
        if (d.id === id) {
          return res.data
        }
        return d
      })
      setDoctors(newUpdatedDoctor)
    })
    .catch( err => console.log(err))
  }
  
  const deleteDoctor = (id) => {
  axios.delete(`/api/doctors/${id}`)
  .then(res => {
    setDoctors(worker.filter (d => d.id !== id))
  })
  .catch(err => console.log(err))
  }
}
export default Doctors