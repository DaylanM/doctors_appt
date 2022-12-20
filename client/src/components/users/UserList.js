import { Link } from "react-router-dom";
import { ListGroup, Button,} from 'react-bootstrap';

const UserList = ({ users, deleteUser }) => (
  <>
    <ListGroup variant="flush">
      { users.map( u =>
        <ListGroup.Item>
          {u.first_name} {u.last_name} {u.dob}
          <Link to={`../doctors/doctors${u.id}`}>
            <Button>Doctors</Button>
          </Link>
          <Button onClick={() => deleteUser(u.id)}>
            Delete
          </Button>
        </ListGroup.Item>
      )}
    </ListGroup>
  </>
)

export default UserList;