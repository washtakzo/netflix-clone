import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ProfilScreen from "./screens/ProfilScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = createBrowserRouter([
    {
      path: "/",
      element: user != null ? <HomeScreen /> : <HomeScreen />,
    },
    {
      path: "/profil",
      element: user != null ? <ProfilScreen /> : <LoginScreen />,
    },
  ]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({ email: userAuth.email, uid: userAuth.uid }));
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
