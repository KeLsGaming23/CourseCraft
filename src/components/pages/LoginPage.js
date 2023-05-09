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
    <div><br></br><br></br>
      <div className="row">
        <div className="jumbotron col-lg-4 offset-lg-4">
          <h3 className="text-center">Login Account</h3>

          <form onSubmit={formSubmit} >
            {error}
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" className="form-control" required onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="password" className="form-control" required onChange={(e) => { setPassword(e.target.value) }} />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Login</button>
            <br></br>
            Forget My Password <Link to="/forget">Click Here</Link>
          </form>

        </div>

      </div>
    </div>
  );
}

export default LoginPage;
