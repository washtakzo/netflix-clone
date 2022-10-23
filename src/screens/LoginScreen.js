import React, { useState } from "react";
import "./LoginScreen.css";
import Signin from "./Signin";

const LoginScreen = () => {
  const [isSigninClicked, setIsSigninClicked] = useState(false);
  const handleSignin = (e) => {
    e.preventDefault();
    setIsSigninClicked(true);
  };
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <div className="loginScreen__header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/langfr-560px-Netflix_2015_logo.svg.png"
            alt="netflix icon"
          />
          <button onClick={handleSignin}>Sign In</button>
        </div>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {isSigninClicked ? (
          <Signin />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form className="loginScreen__form" onSubmit={handleSignin}>
              <input type="email" placeholder="Email Adress" />
              <button type="submit"> GET STARTED</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
