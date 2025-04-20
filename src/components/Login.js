import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm,setIsSignInForm] =useState(true);
  const [errorMessage,setErrormessage]=useState(null);
  const fullName =useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const handleButtonClick=()=>{
    //console.log(email);
    const fullNameValue= isSignInForm ? "Navya Shri" : fullName.current.value;
    const message=checkValidData(fullNameValue,email.current.value,password.current.value);
    setErrormessage(message);
  }
  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background"/>  
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80  rounded-lg">
    <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && <input ref={fullName} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
      <input ref={email} type="text" placeholder="Email address" className="p-4 my-4 w-full bg-gray-700"/>
      <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
      <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
      <button className="p-4 my-6 bg-red-700 w-full" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
      <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now!": "Already user Sign In Now!" }</p>
    </form>
    </div>
  )
}

export default Login