import { Routes, Route } from 'react-router-dom'
import Home from './components/shared/Home';
import MainNavBar from './components/shared/MainNavbar';
import NoMatch from './components/shared/NoMatch';

const App = () => (
  <>
    <MainNavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<NoMatch />} />
    </Routes>
  </>
)


export default App;
