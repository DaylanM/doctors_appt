import {useState, useEffect} from 'react';
import {useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserList from '../users/UserList';
import { Button } from 'react-bootstrap';


const DoctorShow = () => {
  const { id } = useParams()

  const location = useLocation()
  const { first_name, last_name, practice } = location.state 
  const [users, setUsers] = useState([])

  useEffect( () => {
    axios.get(`/api/${id}/courseusers`)
      .then(res => setUsers(res.data))
      .catch( err => console.log(err))
  }, [])

  return(
    <>
      <h1>{first_name} {last_name}</h1>
      <h4>{practice}</h4>
      <Link 
        to={`/${id}/appointments`}
        state={{ doctorName: first_name }}
      >
        <Button>Appointments</Button>
      </Link>
      <br />
      <br />
      <br />
      <h1>All Users for Doctor</h1>
      { users.length > 0 ?
        <UserList users={users} />
      : <p>No users with Doctor</p>}
    </>
  )
}

export default DoctorShow;