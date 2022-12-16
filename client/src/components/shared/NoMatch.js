import { Link } from "react-router-dom";

const NoMatch = () => (
  <>
    <h1>This page doesn't exist</h1>
    <p>404 error</p>

    <Link to='/'>Home</Link>
  </>
)

export default NoMatch;