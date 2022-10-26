import React from "react";
import "./PlanSubsription.css";

const PlanSubsription = ({ title, option, isCurrentPlan }) => {
  return (
    <div className="PlanSubsription">
      <div className="PlanSubsription__planDetails">
        <p>{title}</p>
        <p>{option}</p>
      </div>
      <button
        className={`PlanSubsription__planSubscribe ${
          isCurrentPlan && "PlanSubsription__gray"
        }`}
      >
        {isCurrentPlan ? "Current Package" : "Subscribe"}
      </button>
    </div>
  );
};

export default PlanSubsription;
