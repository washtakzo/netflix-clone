import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const user = null;

const router = createBrowserRouter([
  {
    path: "/",
    element: user != null ? <HomeScreen /> : <LoginScreen />,
  },
  {
    path: "login",
    element: <LoginScreen />,
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>;
// );
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
