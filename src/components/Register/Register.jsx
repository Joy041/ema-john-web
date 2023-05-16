import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { UserContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const [show, setShow] = useState(false)

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { register, verification, googleSignIn } = useContext(UserContext)
    const navigate = useNavigate()

    const handleForm = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        setError('')
        setSuccess('')

        console.log(email, password, confirm)
        if (password !== confirm) {
            alert('confirm password not match')
            return
        }

        else if (password.length < 8) {
            setError('Should contain at last 8 characters')
            return;
        }

        else if (!/(?=.*\d)/.test(password)) {
            setError('Should contain at last one digit')
            return;
        }

        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Should contain at last one upper case')
            return;
        }

        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Should contain at last one lower case')
            return;
        }

        register(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('Register successfully')
                userVerify(loggedUser)
                form.reset()
                navigate('/login')
            })
            .catch(error => {
                setError(error.message)
            })


    }

    const userVerify = user => {
        verification(user)
            .then(() => {
                alert('Check your email')
            })
            .catch(error => setError(error.message))
    }

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('Login successfully')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className='register-form-container'>
            <h2 className='form-title'>Register</h2>
            <form onSubmit={handleForm} className='form-field'>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="inputEmail1" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type= {show ? 'text' : 'password'} name="password" id="inputPassword1" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type= {show ? 'text' : 'password'} name="confirm" id="inputPassword2" required />
                </div>
                <p onClick={() => setShow(!show)} >
                    {
                        show ? <small>Hide password</small> : <small>Show password</small>
                    }
                </p>
                <p className='error'>{error}</p>
                <p className='success'>{success}</p>
                <button className='login-btn'>Register</button>
            </form>
            <p className='or'>Already have an account ? <Link to='/login'>Login</Link></p>
            <p className='or'>--------------- or ---------------</p>
            <button className='google-login-btn' onClick={handelGoogleSignIn}><img className='google-img' src="https://ialcs-hs.getalma.com/ui/alma/base/images/google-g.png" alt="" />Continue with Google</button>
        </div>
    );
};

export default Register;