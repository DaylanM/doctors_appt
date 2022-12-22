import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AppointmentConsumer } from '../../providers/AppointmentProvider';

const AppointmentForm = ({ addAppointment, setAdd, users, id, user_id, doctor_id, updateAppointment, setEdit, getAllUsers }) => {
  const [appointment, setAppointment] = useState({ user_id: users[0].id })

  useEffect( () => {
    getAllUsers(doctor_id)
    if (id) {
      setAppointment({ user_id })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateAppointment(doctor_id, id, appointment)
      setEdit(false)
    } else {
      addAppointment(doctor_id, appointment)
      setAdd(false)
    }
    setAppointment({ user_id: 0 })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>User to enroll</Form.Label>
          <Form.Select
            name='user_id'
            value={appointment.user_id}
            onChange={(e) => setAppointment({...appointment, user_id: e.target.value})}
          >
            { users.map( u => 
              <option value={u.id}>{u.first_name} {u.last_name}</option>
            )}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnnectAppointmentForm = (props) => (
  <AppointmentConsumer>
    { value => <AppointmentForm {...props} {...value} />}
  </AppointmentConsumer>
)

export default ConnnectAppointmentForm;