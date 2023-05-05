import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
function RegisterPage(props) {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        loggedIn: false,
        message: '',
    });

    const formSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: state.name,
            email: state.email,
            password: state.password,
            password_confirmation: state.password_confirmation,
        };

        axios
            .post('http://127.0.0.1:8000/api/register', data)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userName', response.data.user.name);
                localStorage.setItem('role', response.data.user.role);
                setState({
                    ...state,
                    loggedIn: true,
                });
                props.setUser(response.data.user);
                console.log(localStorage.getItem('token'));
                console.log(localStorage.getItem('userName'));
                console.log(localStorage.getItem('role'));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (state.loggedIn) {
        return <Navigate to={'/'} />;
    }
    return (
        <div>
            <br></br>
            <br></br>
            <div className='row'>
                <div className='jumbotron col-lg-4 offset-lg-4'>
                    <h3 className='text-center'>Register Account</h3>

                    <form onSubmit={formSubmit}>
                        <div className='form-group'>
                            <label htmlFor='exampleInputEmail1'>User Name </label>
                            <input
                                type='text'
                                name='name'
                                className='form-control'
                                required
                                onChange={(e) => {
                                    setState({ ...state, name: e.target.value });
                                }}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='exampleInputEmail1'>Email address</label>
                            <input
                                type='email'
                                name='email'
                                className='form-control'
                                required
                                onChange={(e) => {
                                    setState({ ...state, email: e.target.value });
                                }}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='exampleInputPassword1'>Password</label>
                            <input
                                type='password'
                                name='password'
                                className='form-control'
                                required
                                onChange={(e) => {
                                    setState({ ...state, password: e.target.value });
                                }}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='exampleInputPassword1'>Confirm Password</label>
                            <input
                                type='password'
                                name='password_confirmation'
                                className='form-control'
                                required
                                onChange={(e) => {
                                    setState({
                                        ...state,
                                        password_confirmation: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <button type='submit' className='btn btn-primary btn-block'>
                            Register
                        </button>
                        <br></br>
                        Have an Account? <Link to='/loginPage'>Login Here</Link>
                        <br></br>
                        Forget My Password <Link to='/forget'>Click Here</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default RegisterPage;