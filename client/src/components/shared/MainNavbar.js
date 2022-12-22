import { Link } from "react-router-dom";

const MainNavBar = () => (
  <>
    <h1>Clinic</h1>
    <Link to='/'>
      Home
    </Link>
    <Link to='/users'>
      Patients
    </Link>
    <Link to='/doctors'>
      Doctors
    </Link>
  </>
)

export default MainNavBar;