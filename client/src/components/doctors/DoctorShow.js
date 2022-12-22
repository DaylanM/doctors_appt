import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserList from '../users/UserList';
import { DoctorConsumer } from '../../providers/DoctorProvider';
import DoctorForm from './DoctorForm';

const DoctorShow = () => {
  const { id } = useParams()

  const location = useLocation()
  const { first_name, last_name, practice } = location.state 
  const [users, setUsers] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/${id}/doctorusers`)
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
      <Button variant="waring" onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DoctorForm
            id={id}
            first_name={first_name}
            last_name={last_name}
            practice={practice}
            setEdit={setEdit}
          />
        </Modal.Body>
      </Modal>
      <br />
      <br />
      <br />
      <h1>All Users with the Doctor</h1>
      { users.length > 0 ?
        <UserList users={users} />
      : <p>No users in the doctor</p>}
    </>
  )
}

const ConnectDoctorShow = (props) => (
  <DoctorConsumer>
    { value => <DoctorShow {...props} {...value} />}
  </DoctorConsumer>
)

export default ConnectDoctorShow;