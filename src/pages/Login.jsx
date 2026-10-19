
import { useState } from "react";
import Bg_Img from "../assets/Scenora_BG.png";
import Bg_Img_for_Mob from "../assets/Scenora_Mob_Bg.png";

const Login = () => {

  const [isSignIn,setIsSignIn] = useState(true);

  const handleSignInToggle = ()=>{
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="">

      <div className="block md:hidden absolute">
        <img
          src={Bg_Img_for_Mob}
          alt="Scenora Mobile Background"
          className=""
        />
      </div>

      <div className="absolute hidden md:block">
        <img
          src={Bg_Img}
          alt="Scenora Desktop Background"
          className=""
        />
      </div>

      <form className="w-3/12 p-12 absolute bg-gradient-to-r from-purple-950 via-purple-700 to-purple-950 text-white font-serif flex flex-col my-76 mx-auto left-0 right-0">
        <h1 className="font-bold text-2xl text-center ">{isSignIn?"SignIn":"SignUp"}</h1>
       {!isSignIn && <input type="text" placeholder="Full Name" className="p-2 m-2 border outline-none border-slate-300  rounded-lg"/>}
        <input type="text" placeholder="Email" className="p-2 m-2 border outline-none border-slate-300  rounded-lg"/>
        <input type="password" placeholder="Password" className="p-2 m-2 border outline-none border-slate-300  rounded-lg"/>
        <button className="p-2 m-2 border border-2 border-slate-300 font-semibold cursor-pointer rounded-lg outline-none">SignIn</button>
        <p className="mx-2 py-2" onClick={handleSignInToggle}>{isSignIn ? "New User? ":"Already registered? "}<span className="underline font-semibold cursor-pointer">{isSignIn?"SignUp":"SignIn"}</span></p>
      </form>

    </div>
  );
};

export default Login;
