import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Doctors from './components/doctors/Doctors';
import DoctorShow from './components/doctors/DoctorShow';
import MainNavbar from './components/shared/MainNavbar';
import Users from './components/users/Users';
import UserShow from './components/users/UserShow';
import Appointments from './components/appointments/Appointments';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorShow />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<UserShow />} />
      <Route path='/:doctorId/appointments' element={<Appointments />} />
      <Route path='/*' element={<NoMatch />} />
    </Routes>
  </>
)

export default App;