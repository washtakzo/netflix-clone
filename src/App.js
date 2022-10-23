import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const router = createBrowserRouter([
    {
      path: "/",
      element: user != null ? <HomeScreen /> : <LoginScreen />,
    },
  ]);
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
