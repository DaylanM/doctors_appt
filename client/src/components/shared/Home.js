import HomeBody from "./HomeBody";
import HomeFooter from "./HomeFooter";
import { DoctorConsumer } from '../../providers/DoctorProvider';



const Home = () => (
  <>
    <h1>Welcome to our office</h1>

    <HomeBody />
    <HomeFooter />
  </>
)

const ConnectedHome = (props) => (
  <DoctorConsumer>
    { value => <HomeBody {...props}
    {...value} />}
  </DoctorConsumer>
)
export default ConnectedHome;