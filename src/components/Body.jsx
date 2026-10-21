import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Browse from "../pages/Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/slices/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  console.log(user);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
