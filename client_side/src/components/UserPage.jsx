import { Link } from "react-router-dom";
const UserPage = () => {
    return (
        <div>
            <h1>User Page</h1>
            <h3>(Homepage)</h3>
            <Link to="/login" className="btn btn-default bg-light">Logout</Link>
        </div>
    );
};

export default UserPage;