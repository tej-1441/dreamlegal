import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../firebase.js';
import { Button } from 'react-bootstrap';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://media-exp1.licdn.com/dms/image/C4D0BAQE7KQLjXBGZzg/company-logo_200_200/0/1625636069560?e=1663804800&v=beta&t=0qvEy8CaMejW-nCyzEW2PFaQDh52Z2wdb0lZh274kXs'
                    alt="image__name" 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <Button variant="info" type='submit' onClick={signIn} className='login__signInButton'>Sign In</Button>
                </form>

                <p>
                    By signing-in you agree to the DreamLeagal Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Button variant='outline-info' onClick={register} className='login__registerButton'>Create Your DreamLegal Account</Button>
            </div>
        </div>
    )

}

export default Login