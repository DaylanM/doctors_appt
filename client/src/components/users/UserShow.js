import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { Button, Image } from 'react-bootstrap'
// import DoctorList from '../doctors/DoctorList';

const UserShow = ({}) => {
  const { id } = useParams()
  const [user, setUser] = useState({
    first_name: '', last_name: '', dob: ''})
  const [doctors, setDoctors] = useState([])

  useEffect ( () => {
    axios.get(`/api/users/${id}`)
    .then(res => setUser({...res.data}))
    .catch(err => console.log(err))

    axios.get(`/api/${id}/userdoctors`)
    .then(res => setDoctors(res.data))
    .catch(err => console.log(err))
  }, [])

  const {first_name, last_name, dob} = user
  return (
    <>
      <h1>{first_name} {last_name}</h1>
      <h4>{dob}</h4>
      <button>Edit</button>
      <button>Delete</button>
    </>
  )
}

export default UserShow;