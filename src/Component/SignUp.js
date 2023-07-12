import './SignIn.css'
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
        number:"",
        email:"",
        password:""
    })
    const [submitted, setSubmitted] = React.useState(false)
    // const [valid, setValid] = React.useState(false)
    const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(false)

    const handleSignUp = (event) => {
        event.preventDefault();
        console.log("sign up handle")
        console.log(userDetails);
        // if(userDetails.name && userDetails.number && userDetails.email && userDetails.password) {
        //     setValid(true)
        // }
        setSubmitted(true);
        setSubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password)
        .then(async(res) => {
            setSubmitButtonDisabled(false)
            const user = res.user;
            await updateProfile(user, {
                displayName : userDetails.name,
                phoneNumber : userDetails.number
            });
          navigate('/')
        })
        .catch(error => {
            setSubmitButtonDisabled(false)
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
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
                        onChange = {event => setUserDetails(prev => ({...prev, name:event.target.value}))}
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
                        onChange = {event => setUserDetails(prev => ({...prev, number:event.target.value}))}
                    />

                    <br />
                        {submitted && !userDetails.number && <span className = "error"> <IoAlert /> Enter your mobile number </span>}
                    <br/>

                    <h5><label htmlFor="email">E-mail</label></h5>
                    <input 
                        type='email' 
                        placeholder='Your E-mail' 
                        id="email"
                        onChange = {event => setUserDetails(prev => ({...prev, email:event.target.value}))}
                    />

                    <br />
                        {submitted && !userDetails.email && <span className = "error"><IoAlert />Enter your email </span>}
                    <br/>

                    <h5><label htmlFor="password">Password</label></h5>
                    <input 
                        type='password' 
                        placeholder='Your Password' 
                        id="password"
                        onChange = {event => setUserDetails(prev => ({...prev, password:event.target.value}))}
                    />
                    <br />
                        {submitted && !userDetails.password && <span className = "error"> <IoAlert /> Enter password </span>}
                    <br/>

                    <button className='login__btn' type='submit' onClick={event => handleSignUp(event)} disabled={submitButtonDisabled}>Sign Up</button>

                    <p>Already Signed up? <Link to='/login' className='amazon-color-link'>Sign in.</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp;


// import React from "react"
// import './App.css';

// function App() {

//   const [data, setData] = React.useState({
//                                       firstName: "",
//                                       lastName: "",
//                                       email: ""
//                                     })

//   const [submitted, setSubmitted] = React.useState(false)

//   const [valid, setValid] = React.useState(false)

//   function handleFirstName(event) {
//       return setData({...data, firstName:event.target.value});
//   }    
  
//   function handleLastName(event) {
//     return setData({...data, lastName:event.target.value});
//   }  

//   function handleEmail(event) {
//     return setData({...data, email:event.target.value});
//   }  

//   function handleRegistration(event) {
//     event.preventDefault();
//     if(data.firstName && data.lastName && data.email) {
//       setValid(true)
//     }
//     setSubmitted(true)
//   }

//   console.log(data);
//   return (
//     <div className="app-container">
//      <form onSubmit = {handleRegistration}>
//         {submitted &&  valid && <div className="success-msg">Success! Thank you for registering</div>}
//         <input 
//           type = "text"
//           placeholder='First Name'
//           id = "first_name"
//           className = "form-field"
//           name = "first-name"
//           onChange={handleFirstName}
//           value={data.firstName}
//         />
//         <br />
//         {submitted && !data.firstName && <span class = "error">First name is required</span>}
//         <br/>

//         <input 
//           type = "text"
//           placeholder='Last Name'
//           id = "last_name"
//           className = "form-field"
//           name = "last-name"
//           onChange={handleLastName}
//           value={data.lastName}
//         />
//         <br />
//         {submitted && !data.lastName && <span class = "error">Last name is required</span>}
//         <br/>
//         <input 
//           type = "text"
//           placeholder='Email'
//           id = "email"
//           className = "form-field"
//           name = "email"
//           onChange={handleEmail}
//           value={data.email}
//         />
//         <br />
//         {submitted && !data.email && <span class = "error">Email address is required</span>}
//         <br />
//         <button className="register-button">
//           Register
//         </button>
//      </form>
//     </div>
//   );
// }

// export default App;
