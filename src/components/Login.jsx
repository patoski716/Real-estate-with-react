import { Breadcrumbs } from "@material-tailwind/react";
import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import Alert from './Alert';
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
});

const { email, password } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
    e.preventDefault();

    login(email, password);
};

if (isAuthenticated)
    return <Navigate to='/admin' />;
  return (
    <div>
      <header
        className="w-full h-96 brightness-50 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <h3 className=" text-center lg:text-5xl md:text-4xl sm:text-2xl  text-amber-500 font-bold drop-shadow-lg text-xl">Login</h3>
            <p>
            <Breadcrumbs className='text-black font-semibold mt-6'>
        <Link to="/" className="opacity-60">
            Home
        </Link>
        <span className="text-white/100">Login</span>
    </Breadcrumbs>
            </p>                       
        </div>
    </header>


<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <p className="bg-primary text-black"><Alert/></p>
                    <h1 className="mb-8 text-3xl text-center">Login</h1>
                    
                    
                  <form onSubmit={e => onSubmit(e)}>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" value={email}
                        onChange={e => onChange(e)} required/>

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"  value={password}
                        onChange={e => onChange(e)}
                        minLength='6' required />
                    

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-amber-700 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Sumbit</button>
                    </form>
                </div>

                <div className="text-grey-dark mt-6">
                    Don't have an account? 
                    <Link className="no-underline border-b border-blue text-primary" to="/sign-up">
                        Regiter
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);