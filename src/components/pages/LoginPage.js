import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from '../../context/LoginContext';

const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const { setIsLogin } = useContext(LoginContext);

  const formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    }

    axios.post('http://127.0.0.1:8000/api/login', data)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userName', response.data.user.name);
        localStorage.setItem('role', response.data.user.role);
        setLoggedIn(true);
        setIsLogin(true);
        props.setUser(response.data.user);
        console.log(localStorage.getItem('token'));
        console.log(localStorage.getItem('userName'));
        console.log(localStorage.getItem('role'));
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  }
  if (localStorage.getItem('token') && localStorage.getItem('role') === '0') {
    return <Navigate to={'/ErrorPage'} />
  }
  if (loggedIn || localStorage.getItem('token')) {
    return <Navigate to={'/'} />
  }

  let error = "";
  if (message) {
    error = (
      <div>
        <div className="alert alert-danger" role="alert" >
          {message}
        </div>
      </div>
    )
  }

  return (
    <div className="" style={{ minHeight: "100vh" }}>
      <div className='mx-auto mt-5' style={{ width: "30%" }}>
        <h3 className="bg-secondary text-white p-2 text-center hero-background">Login Account</h3>

        <form onSubmit={formSubmit} className="p-4" style={{ border: "2px solid gray" }} >
          {error}
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" name="email" className="form-control" required onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name="password" className="form-control" required onChange={(e) => { setPassword(e.target.value) }} />
          </div>

          <button type="submit" className="btn btn-primary mb-3" style={{ width: "100%" }}>Login</button>
          <span>Forget My Password <Link to="/forget">Click Here</Link></span>
        </form>

      </div>

    </div>
  );
}

export default LoginPage;
