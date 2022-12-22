import { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { UserConsumer } from "../../providers/UserProvider";


const UserForm = ({addUser, setAdd, id, first_name, last_name, dob, updateUser, setEdit}) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', dob: ''})

  useEffect ( () => {
    if (id) {
      setUser({ first_name, last_name, dob,})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } else {
      addUser(user)
      setAdd(false)
    }
    setUser({ first_name: '', last_name: '', dob: ''})
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control 
            placeholder="First Name"
            name='first_name'
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            placeholder="Last Name" 
            name='last_name'
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control 
            placeholder="DD-MM-YYY"
            name='dob'
            value={user.dob}
            onChange={(e) => setUser({ ...user, dob: e.target.value })}
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

const ConnectedUserForm = (props) => (
  <UserConsumer>
    { value => <UserForm {...props} {...value} />}
  </UserConsumer>
)

export default ConnectedUserForm;