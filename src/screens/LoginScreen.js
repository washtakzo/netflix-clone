import React from "react";
import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <div className="loginScreen__header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/langfr-560px-Netflix_2015_logo.svg.png"
            alt="netflix icon"
          />
          <button>Sign In</button>
        </div>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen_body">
        <h1>Unlimited films, TV programmes and more.</h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <form className="loginScreen__form">
          <input type="email" placeholder="Email Adress" />
          <button type="submit"> GET STARTED</button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
