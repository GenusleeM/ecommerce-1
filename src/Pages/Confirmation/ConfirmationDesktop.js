import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Confirmation.css";

export default function ConfirmationDesktop(props) {
  const data = props.name;
  const [proccessingData, setProccessingData] = useState(true);

  // Redirect link
  const navigate = useNavigate();

  useEffect(() => {
    if (data !== undefined) {
      setTimeout(() => {
        setProccessingData(false);
      }, 1500);
    }
  }, [data]);

  const redirect = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <>
      {proccessingData === false ? (
        <div className="Confirmation">
          <div className="ConfirmationContainer">
            <h1>Thanks {data}</h1>
            <h2>Your purchase has been processed successfully</h2>
            <p>You will get an email from us once your purchase is shipped</p>
            <button onClick={redirect}>Finish</button>
          </div>
        </div>
      ) : (
        <div className="Proccessing">
          <h1>Proccessing...</h1>
        </div>
      )}
    </>
  );
}
