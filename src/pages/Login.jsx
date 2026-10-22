import { useRef, useState } from "react";
import Bg_Img from "../assets/Scenora_BG.png";
import Bg_Img_for_Mob from "../assets/Scenora_Mob_Bg.png";
import { checkValidation } from "../utils/validate";
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userSlice";
import Header from "../components/Header";
import { PHOTO_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg,setErrorMsg] = useState("");
  const nameRef=useRef(null)
  const emailRef = useRef(null);
  const passwordRef= useRef(null);
  const dispatch = useDispatch()

  const handleSignInToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFormValidate = ()=> {
    const message = checkValidation(emailRef.current.value,passwordRef.current.value);
    setErrorMsg(message);
    if(message) return;

    if(!isSignIn){
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
  displayName: nameRef.current.value, photoURL: PHOTO_URL
})
.then(()=>{
  const { uid, email, displayName, photoURL } = auth.currentUser;
dispatch(addUser({displayName,email,photoURL,uid}))
}).catch((error)=>{
  console.error(error.errorMessage)
})
 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode + errorMessage)
  });
    }
    else{
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      setErrorMsg(errorCode + errorMessage)
  });
    }
  }

  return (
    <div className="">
      <Header/>
      <div className="block md:hidden absolute">
        <img
          src={Bg_Img_for_Mob}
          alt="Scenora Mobile Background"
          className=""
        />
      </div>
      <div className="absolute hidden md:block">
        <img src={Bg_Img} alt="Scenora Desktop Background" className="" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 absolute bg-gradient-to-r from-purple-950 via-purple-700 to-purple-950 text-white font-serif flex flex-col my-76 mx-auto left-0 right-0"
      >
        <h1 className="font-bold text-2xl text-center ">
          {isSignIn ? "SignIn" : "SignUp"}
        </h1>
        {!isSignIn && (
          <input
          ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 border outline-none border-slate-300  rounded-lg"
          />
        )}
        <input
        ref={emailRef}
          type="text"
          placeholder="Email"
          className="p-2 m-2 border outline-none border-slate-300  rounded-lg"
        />
        <input
        ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-2 m-2 border outline-none border-slate-300  rounded-lg"
        />
        {errorMsg && <p className="text-red-600 text-sm font-normal">{errorMsg}</p>}
        <button onClick={handleFormValidate} className="p-2 m-2 border border-2 border-slate-300 font-semibold cursor-pointer rounded-lg outline-none">
          {isSignIn ? "SignIn" : "SignUp"}
        </button>
        <p className="mx-2 py-2" onClick={handleSignInToggle}>
          {isSignIn ? "New User? " : "Already registered? "}
          <span className="underline font-semibold cursor-pointer">
            {isSignIn ? "SignUp" : "SignIn"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
