import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import {Link, useNavigate} from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(res => {
                alert("Created User");
                alert(res.status);
                navigate('/login');
        }).catch(err => {
            console.log(err);
            alert("Error: " + err);
        });
    }


    return(
        <div>
            <div className="d-flex justify-content-center align-items-center  vh-100" style={{width:'80%'}}>
                <div className="bg-white p-3 rounded w-100">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
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
                        </div>
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
                            Register
                        </button>
                        <p className="mt-2">Already have an account? <a href="/login">Login</a></p>
                        {/* <Link to="/login" className="btn btn-defaul bg-light border w-100">Login</Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;