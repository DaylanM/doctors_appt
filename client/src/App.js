import { Routes, Route } from 'react-router-dom'
import Home from './components/shared/Home';
import MainNavBar from './components/shared/MainNavbar';
import NoMatch from './components/shared/NoMatch';
import Doctors from './components/doctors/Doctors';
import Users from './components/users/Users';
import DoctorShow from './components/doctors/DoctorShow'
import UserShow from './components/users/UserShow';

const App = () => (
  <>
    <MainNavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorShow />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<UserShow />} />
      <Route path='/*' element={<NoMatch />} />

    </Routes>
  </>
)


export default App;
