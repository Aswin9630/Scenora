import logo from "../assets/Scenora_Logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/slices/userSlice";
import { toggleGPTSearch } from "../redux/slices/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch= useSelector(store=>store.gpt.showGPTSearch)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  const handleGPTSearchToggle = ()=>{
    dispatch(toggleGPTSearch())
  }

  return (
    <header className="w-full  bg-gradient-to-r from-black  to-gray-900 flex items-center justify-between  px-6 md:px-12 relative z-20">
      <img
        src={logo}
        alt="Scenora Logo"
        className="w-28 md:w-36 h-auto object-contain"
      />

      <div className="flex">
        <button
          className="col-span-1 rounded-xl bg-gradient-to-r from-purple-800 via-purple-500 to-purple-900 px-5 py-3.5 h-fit self-center mr-4 md:mr-8 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/30 active:scale-[0.98] sm:col-span-3 cursor-pointer"
         onClick={handleGPTSearchToggle}>
          {showGptSearch ? "Home" : "GPT Search" }
        </button>
        {user && (
          <div className="flex flex-col">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User profile"
                className="w-9 h-9 rounded-full object-cover"
              />
            ) : (
              <FaRegUserCircle className="text-white text-3xl" />
            )}

            <p className="text-sm font-bold text-white">{user?.displayName}</p>
            <button
              type="button"
              onClick={handleSignOut}
              className="text-sm text-white hover:text-purple-300 cursor-pointer"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
