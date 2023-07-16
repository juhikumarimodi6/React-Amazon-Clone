import './SignUp.css'
import SignUpHeaderLogo from '../Assets/Logo/amazon-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { IoAlert } from "react-icons/io5";
import { auth } from '../Firebase';
import {createUserWithEmailAndPassword , updateProfile} from 'firebase/auth';

const SignUp = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = React.useState({
        name:"",
        number: "",
        email: "",
        password: ""
    });
    const [submitted, setSubmitted] = React.useState(false)
    const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(false)
    const [valid, setValid] = React.useState(false);
    const [error1, setError1] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        (userDetails.name && userDetails.number && userDetails.email && userDetails.password) ? setValid(true) : setValid(false);
        valid && handleSignUp();
    }

    const handleSignUp = () => {
        setSubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password)
        .then(async(res) => {
            setSubmitButtonDisabled(false)
            const user = res.user;
            console.log(user)
            await updateProfile(user, {
                displayName : userDetails.name,
                phoneNumber : userDetails.number,
            });
            // console.log(userDetails.number)
            // console.log(user.phoneNumber);
          navigate('/')
        })
        .catch(error => {
            setSubmitButtonDisabled(false)
            setError1("Enter valid input fields");
            console.log(error1);
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!')
            setError1('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!')
            setError1('That email address is invalid!');
          }
        });
    }
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
                    <h5><label htmlFor="name" >Your name</label></h5>
                    <input 
                        type='text' 
                        placeholder='First and last name' 
                        id="name"
                        onChange={event => setUserDetails(prev => ({...prev , name:event.target.value}))}
                    />

                    <br />
                    {submitted && !userDetails.name && <span className = "error"> <IoAlert /> Enter your name</span>}
                    <br/>

                    <h5><label htmlFor="mobilenum"> Mobile number</label></h5>
                    <input 
                        type='text' 
                        placeholder='Phone number' 
                        pattern="[0-9]{10}"
                        id="mobilenum"
                        onChange={event => setUserDetails(prev => ({...prev , number:event.target.value}))}
                    />

                    <br />
                    {submitted && !userDetails.number && <span className = "error"> <IoAlert /> Enter your mobile number </span>}
                    <br/>

                    <h5><label htmlFor="email">E-mail</label></h5>
                    <input 
                        type='email' 
                        placeholder='Your E-mail' 
                        id="email"
                        onChange={event => setUserDetails(prev => ({...prev , email:event.target.value}))}
                    />

                    <br />
                    {submitted && !userDetails.email && <span className = "error"><IoAlert />Enter your email </span>}
                    <br/>

                    <h5><label htmlFor="password">Password (atleast 6 character)</label></h5>
                    <input 
                        type='password' 
                        placeholder='Your Password' 
                        id="password"
                        onChange={event => setUserDetails(prev => ({...prev , password:event.target.value}))}

                    />

                    <br />
                    {submitted && !userDetails.password && <span className = "error"> <IoAlert /> Enter password </span>}
                    <br/>

                    {submitted && valid &&  <span className = "error">  {error1} </span>}
                    <button className='login__btn' type='submit' onClick={event => handleSubmit(event)} disabled={submitButtonDisabled}>Sign Up</button>

                    <p>Already Signed up? <Link to='/login' className='amazon-color-link'>Sign in.</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp;