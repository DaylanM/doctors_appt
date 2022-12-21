import { Routes, Route } from 'react-router-dom'
import Home from './components/shared/Home';
import MainNavBar from './components/shared/MainNavbar';
import NoMatch from './components/shared/NoMatch';
import Doctors from './components/doctors/Doctors';
import Users from './components/users/Users'

const App = () => (
  <>
    <MainNavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/*' element={<NoMatch />}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/users' element={<Users/>}/>
    </Routes>
  </>
)


export default App;
