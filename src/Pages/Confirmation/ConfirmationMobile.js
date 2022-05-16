import React from "react";
import { useNavigate } from "react-router-dom";
import "./Confirmation.css";

export default function ConfirmationMobile(props) {
  // Redirect link
  const navigate = useNavigate();

  const redirect = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className="Confirmation-Mobile">
      <div className="ConfirmationContainer-Mobile">
        <h1>Thanks {props.name}</h1>
        <h2>Your purchase has been processed successfully</h2>
        <p>You will get an email from us once your purchase is shipped</p>
        <button onClick={redirect}>Finish</button>
      </div>
    </div>
  );
}
