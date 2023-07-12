import './SignIn.css'
import SignInHeaderLogo from '../Assets/Logo/amazon-logo.png';
import { Link } from 'react-router-dom';

const SignIn = () => {

  return (
        <div className='login'>
            <Link to='/'>
                <img src={SignInHeaderLogo}
                    alt='header logo'  
                    className='login__logo' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='email' placeholder='Your E-mail' />

                    <h5>Password</h5>
                    <input type='password' placeholder='Your Password' />

                    <button className='login__btn' type='submit' >Sign In</button>

                    <p>New Amazon user? <Link to = '/signup' className='amazon-color-link'>Sign up now.</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignIn
