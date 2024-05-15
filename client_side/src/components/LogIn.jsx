import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import {Link} from 'react-router-dom';

const LogIn = () => {
    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {email, password})
        .then(res => {
                alert("Logged-In");
                alert(res.status);
        }).catch(err => {
            console.log(err);
            alert("Error: " + err);
        });
    }


    return(
        <div>
            <div className="d-flex justify-content-center align-items-center  vh-100" style={{width:'80%'}}>
                <div className="bg-white p-3 rounded w-100">
                    <h2>Log-In</h2>
                    <form onSubmit={handleSubmit}>
                        {/* <div className="mb-3">
                            <label htmlFor="name">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                autoComplete="off"
                                name="name"
                                value={name}
                                className="form-control rounded-0"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div> */}
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                value={email}
                                className="form-control rounded-0"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                autoComplete="off"
                                name="password"
                                value={password}
                                className="form-control rounded-0"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0">
                            Login
                        </button>
                        <p className="mt-2">Do not have an account? <a href="/register">Register</a></p>
                        {/* <Link to="/register" className="btn btn-defaul bg-light border w-100">Register</Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn;