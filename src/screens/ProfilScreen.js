import React from "react";
import "./ProfilScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import PlanSubsription from "../components/PlanSubsription";

const ProfilScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profilScreen">
      <Nav />
      <div className="profilScreen__body">
        <h1>Edit Profile</h1>
        <div className="profilScreen__body__detail">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar logo"
          />
          <div className="profilScreen__body__info">
            <h2>{user?.email}</h2>
            <h3>Plans (Current Plan : premium)</h3>
            <h4>Renewal date : 04/03/2022</h4>
            <div className="profilScreen__plans">
              <PlanSubsription title="Netflix Basic" option="720p" />
              <PlanSubsription
                title="Netflix Standard"
                option="1080p"
                isCurrentPlan={true}
              />
              <PlanSubsription title="Netflix Premium" option="4k+HDR" />
            </div>
            <button
              className="profilScreen__signout"
              onClick={() => signOut(auth)}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilScreen;
