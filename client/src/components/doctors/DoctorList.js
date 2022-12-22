import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';


const DoctorList = ({ doctors }) => (
  <Container>
    <Row sm='12' md='4'>
      { doctors.map( c =>
        <Col key={c.id}>
          <Card style={{ width: '16rem', height: '20rem' }}>
            <Card.Body>
              <Card.Title>{c.first_name}</Card.Title>
              <Card.Text>
                {c.practice}
              </Card.Text>
              <Image src="https://plus.unsplash.com/premium_photo-1661766569022-1b7f918ac3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" fluid width='100px' />
              <Link 
                to={`/doctors/${c.id}`}
                state={ {...c} }
              >
                <Button variant="dark">Show</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  </Container>
)

export default DoctorList;