import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { DoctorConsumer } from '../../providers/DoctorProvider';

const DoctorForm = ({addDoctor, setAdd, id, first_name, last_name, practice, updateDoctor, setEdit}) => {
  const [ doctor, setDoctor] = useState ({first_name:'', last_name:'', practice:'' })

  useEffect (() => {
    if (id) {
      setDoctor({first_name, last_name, practice,})
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
   if (id) {
     updateDoctor(id, doctor)
     setEdit(false)
    } else {
      addDoctor(doctor)
      setAdd(false)
   }

    setDoctor({ first_name: '', last_name: '', practice:'', })

  }

  return (
    <>
    <h1>{id?'Update':'Create'}Doctor</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            name='first_name'
            value={doctor.first_name}
            onChange={(e) => setDoctor({...doctor, title: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            name='last_name'
            value={doctor.last_name}
            onChange={(e) => setDoctor({...doctor, last_name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Practice</Form.Label>
          <Form.Control 
            name='practice'
            value={doctor.practice}
            onChange={(e) => setDoctor({...doctor, practice: e.target.value })}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </>
  )
}

const ConnectedDoctorForm = (props) => (
  <DoctorConsumer>
    { value => <DoctorForm {...props} {...value} />}
  </DoctorConsumer>
)

export default ConnectedDoctorForm;