import {useState, useEffect} from 'react';
import axios from 'axios';
import DoctorForm from './DoctorForm';
import DoctorList from './DoctorList';
import { Button, Container } from 'react-bootstrap';


const Doctors = () => {
  const [doctors,setDoctors] = useState ([])
  const [adding, setAdd] = useState(false)

  useEffect (() => {
    axios.get('/api/doctors')
      .then( res => setDoctors(res.data))
      .catch( err => console.log(err))
  },[])

  const addDoctor = (doctor) => {
    axios.post('/api/doctors', { doctor })
    .then (res => setDoctors([...doctors, res.data]))
    .catch (err =>console.log(err))
  }

  const updateDoctor = (id, doctor) => {
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
    .then(res => setDoctors(doctors.filter (d => d.id !== id)))
    .catch(err => console.log(err))
  }

  return (
    <Container>
      { adding ? 
        <>
          <DoctorForm
            addDoctor={addDoctor}
            setAdd={setAdd}
          />
          <Button onClick={() => setAdd(false)}>
            Cancel
          </Button>
        </>
        :
        <Button
        onClick={() => setAdd(true)}
        >
          +
        </Button>
      }
      <br />
      <h1>All Doctors</h1>
      <DoctorList 
        doctors={doctors}
        updateDoctor={updateDoctor}
        deleteDoctor={deleteDoctor}
      />
    </Container>
  )
}
export default Doctors;