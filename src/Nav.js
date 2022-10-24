import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const transitionNabBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNabBar);

    return () => {
      window.removeEventListener("scroll", transitionNabBar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/langfr-560px-Netflix_2015_logo.svg.png"
          alt="netflix logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
          onClick={() => {
            navigate("/profil");
          }}
        />
      </div>
    </div>
  );
};

export default Nav;
