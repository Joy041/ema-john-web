import React, { useContext, useRef, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false)
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { login, forgetPassword, googleSignIn, user } = useContext(UserContext)
    const emailRef = useRef();
    const navigate = useNavigate()


    const handelLoginForm = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        setSuccess('')

        console.log(email, password)

        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess('Login successfully')
            form.reset()
            navigate(from, { replace: true })
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const handelForgetPass = () => {
         const email = emailRef.current.value;
         if(!email){
            alert('Provide your email address')
         }
         forgetPassword(email)
         .then(() => {
            alert('Check your mail')
         })
         .catch(error => {
            setError(error.message)
         })
    }

    const handelGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess('Login successfully')
            navigate(from, { replace: true })
        })
        .catch(error => {
            setError(error.message)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handelLoginForm} className='form-field'>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" ref={emailRef} id="inputEmail1" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type= {show ? 'text' : 'password'} name="password" id="inputPassword1" required />
                    <p onClick={ () => setShow(!show)} > 
                        {
                           show ? <small>Hide password</small> : <small>Show password</small>
                        }
                    </p>
                </div>
                <button onClick={handelForgetPass} className='forgetPass'>Forget password</button>
                <p className='error'>{error}</p>
                <p className='success'>{success}</p>
                <button className='login-btn'>Login</button>
            </form>
            <p className='or'>New to ema-john ? <Link to='/register'>Create New Account</Link></p>
            <p className='or'>--------------- or ---------------</p>
            <button className='google-login-btn' onClick={handelGoogleSignIn}><img className='google-img' src="https://ialcs-hs.getalma.com/ui/alma/base/images/google-g.png" alt="" />Continue with Google</button>
        </div>
    );
};

export default Login;