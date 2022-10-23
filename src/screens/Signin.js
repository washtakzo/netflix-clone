import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { createUser, signinUser } from "../firebase";
import "./Signin.css";

const Signin = () => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSignin = (e) => {
    e.preventDefault();
    createUser(emailRef.current.value, passwordRef.current.value)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    signinUser(emailRef.current.value, passwordRef.current.value)
      .then((res) => {
        console.log({ res });
        dispatch(login({ email: res.user.email, uid: res.user.uid }));
        console.log(res.user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="loginScreen__signin">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" onClick={handleSignin}>
          Sign In
        </button>
        <h4>
          <span>New to Netflix? </span>
          <span className="loginScreen__signup_now" onClick={handleSignup}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default Signin;
