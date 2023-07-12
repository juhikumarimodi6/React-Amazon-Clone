import './SignIn.css'
import SignUpHeaderLogo from '../Assets/Logo/amazon-logo.png';
import { Link } from 'react-router-dom';

const SignUp = () => {

  return (
        <div className='login'>
            <Link to='/'>
                <img src={SignUpHeaderLogo}
                    alt='header logo'  
                    className='login__logo' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign Up</h1>
                <form>
                    <h5>Your name</h5>
                    <input type='text' placeholder='First and last name' />

                    <h5>Mobile number</h5>
                    <input type='number' placeholder='Phone number' />

                    <h5>E-mail</h5>
                    <input type='email' placeholder='Your E-mail' />

                    <h5>Password</h5>
                    <input type='password' placeholder='Your Password' />

                    <button className='login__btn' type='submit' >Sign Up</button>

                    <p>Already Signed up? <Link to='/login' className='amazon-color-link'>Sign in.</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
