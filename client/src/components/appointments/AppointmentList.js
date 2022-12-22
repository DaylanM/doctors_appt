import { ListGroup } from "react-bootstrap";
import AppointmentShow from "./AppointmentShow";

const AppointmentList = ({ appointments }) => (
  <>
    <ListGroup>
      { appointments.map( e => 
        <AppointmentShow 
          key={e.id}
          {...e}
        />
      )}
    </ListGroup>
  </>
)

export default AppointmentList