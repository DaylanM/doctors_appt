import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Container, Button, Modal } from "react-bootstrap";
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import { AppointmentConsumer } from "../../providers/AppointmentProvider";

const Appointments = ({ getAllAppointments, appointments }) => {
  const { doctorId } = useParams()
  const location = useLocation()
  const { doctorName } = location.state
  
  const [adding, setAdd] = useState(false);

  useEffect( () => {
    getAllAppointments(doctorId)
  }, [])
  
  return (
    <Container>
      <Button variant="primary" onClick={() => setAdd(true)}>
        Create Appointment
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>CreateAppointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AppointmentForm 
            setAdd={setAdd}
            doctor_id={doctorId}
          />
        </Modal.Body>
      </Modal>

      <h1>All Appointments for the doctor {doctorName}</h1>
      <AppointmentList 
        appointments={appointments}
      />
    </Container>
  )
}

const ConnectedAppointments = (props) => (
  <AppointmentConsumer>
    { value => <Appointments {...props} {...value} />}
  </AppointmentConsumer>
)

export default ConnectedAppointments;