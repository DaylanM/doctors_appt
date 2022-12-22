import { Link } from "react-router-dom";
import { ListGroup, Button,} from 'react-bootstrap';

const UserList = ({ users }) => (
  <>
    <ListGroup variant="flush">
      { users.map( u =>
        <ListGroup.Item>
          <h4>First Name</h4>{u.first_name}
          <h4>Last Name</h4>{u.last_name}
          <h4>DOB</h4>{u.dob}
          <br />
          <Link to={`/users/${u.id}`}>
            <Button>show</Button>
          </Link>
        </ListGroup.Item>
      )}
    </ListGroup>
  </>
)

export default UserList;