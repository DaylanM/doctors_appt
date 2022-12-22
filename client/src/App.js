import { Routes, Route } from 'react-router-dom'
import Home from './components/shared/Home';
import MainNavBar from './components/shared/MainNavbar';
import NoMatch from './components/shared/NoMatch';
import Doctors from './components/doctors/Doctors';
import Users from './components/users/Users'
import Users from './components/users/Users';
import DoctorShow from './components/doctors/doctorShow'

const App = () => (
  <>
    <MainNavBar />
    <Routes>
<<<<<<< HEAD
      <Route path='/' element={<Home />}/>
      <Route path='/*' element={<NoMatch />}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/users/:id' element={<UserShow />} />
=======
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<NoMatch />} />
      <Route path='/users' element={<Users />} />
      <Route path='/:userId/doctor' element={<DoctorShow />} />
>>>>>>> fd1f0b0 (stuff)
    </Routes>
  </>
)


export default App;
