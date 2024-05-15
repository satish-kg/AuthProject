import {Link} from "react-router-dom"
const Homepage = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <p>Page for routing `/`</p>
            <Link to="/login" className="btn btn-default bg-light">Login</Link>
            <Link to="/register" className="btn btn-default bg-light">Signup</Link>
        </div>
    );
}

export default Homepage;