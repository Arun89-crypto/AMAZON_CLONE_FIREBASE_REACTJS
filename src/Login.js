import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            //logged in = redirect to homepage
            history.push("/");
        }).catch((e) => alert(e.message));
    }
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            // create a user and log in
            history.push("/");
        }).catch((e) => alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png" alt="" className="login__logo"></img>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"></input>
                    <h5>Password</h5>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password'></input>
                    <br></br>
                    <button onClick={login}>Sign In</button>
                    <br></br>
                    <br></br>
                    <button onClick={register}>Create your amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
