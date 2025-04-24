import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {auth} from '../utils/firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser} from '../utils/userSlice';
import { background } from '../utils/constants';

const Login = () => {
  const [isSignInForm,setIsSignInForm] =useState(true);
  const [errorMessage,setErrormessage]=useState(null);

  const fullName =useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const dispatch=useDispatch();

  const handleButtonClick=()=>{
    //console.log(email);
    const fullNameValue= isSignInForm ? "Navya Shri" : fullName.current.value;
    const message=checkValidData(fullNameValue,email.current.value,password.current.value);
    setErrormessage(message);
    if(message) return;
    if(!isSignInForm)
    {
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullName.current.value, 
          photoURL: "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e",
         }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(
            addUser(
              {
               uid:uid,
               email:email,
               displayName:displayName,
               photoURL:photoURL,
              })
          );
        }).catch((error) => {
            setErrormessage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrormessage(errorCode+"-"+errorMessage);
      });

    }
    else{
    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrormessage(errorCode+"-"+errorMessage);
    });
    }
  }
  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
    <div className="absolute">
    <img src={background} alt="background"/>  
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