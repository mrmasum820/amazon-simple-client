import { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault()
        // get the value from
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm);

        //password validation
        setError('')
        if (password !== confirm) {
            setError('Your password did not match')
            return
        }
        if (password.length < 6) {
            setError('password must be at least 6 characters')
            return
        }

        //firebase authenticaiton
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }

    return (
        <div className='form-container'>
            <h2 className="form-title">Sign up</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="pass">Password</label>
                    <input type="password" name="password" id="pass" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign up" />
            </form>
            <p><small>Already have an account? <Link to="/login">Login</Link> </small> </p>
            <p className='error'>{error}</p>
        </div>
    );
};

export default SignUp;