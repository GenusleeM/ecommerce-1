import React, { useState, useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "./CreditcardForm.css";

export default function CardInfoForm() {
  // Data Context Hooks
  const newData = useContext(DataContext);

  // Navigate link
  const navigate = useNavigate();

  // Get data Customer
  var stored = JSON.parse(localStorage.getItem("pay_confirm"));

  const [cardHolder, setCardHolder] = useState("John Doe");
  const [cardHolderErr, setCardHolderErr] = useState("");
  const cardHolderFormChange = (e) => {
    setCardHolder(e.target.value);
  };

  const [cardNumber, setCardNumber] = useState("1111 1111 1111 1111");
  const [cardNumberErr, setCardNumberErr] = useState("");
  const cardNumberFormChange = (e) => {
    const result = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();

    setCardNumber(result);
  };

  const [expDate, setExpDate] = useState(new Date().toLocaleDateString());
  const [expDateErr, setExpDateErr] = useState("");
  const expDateFormChange = (e) => {
    setExpDate(e.target.value);
  };

  const [cvcNum, setCvcNum] = useState("812");
  const [cvcNumeErr, setCvcNumErr] = useState("");
  const cvcFormChange = (e) => {
    setCvcNum(e.target.value);
  };

  const CardConfirmation = () => {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    
    cardHolder === ""
      ? setCardHolderErr("* Name Card Holder ( Important ! )")
      : setCardHolderErr("");
    cardNumber === ""
      ? setCardNumberErr("* Card Number ( Important ! )")
      : setCardNumberErr("");
    expDate === ""
      ? setExpDateErr("* EXP. Date ( Important ! )")
      : setExpDateErr("");
    cvcNum === "" ? setCvcNumErr("* CVC ( Important ! )") : setCvcNumErr("");

    if (
      cardHolder !== "" &&
      cardNumber !== "" &&
      expDate !== "" &&
      cvcNum !== ""
    ) {
      const timeStamp = {
          dateStamp: new Date().toLocaleDateString(),
          timeStamp: new Date().toLocaleTimeString(),
        }
        const dataCart = {cart: newData.cart}

      const cardDetaiil = {
        card: {
          cardHolder: cardHolder,
          cardNumber: cardNumber,
          expDate: expDate,
          cvcNum: cvcNum,
        },
      };

      localStorage.setItem("pay_confirm", JSON.stringify([timeStamp, stored[0], cardDetaiil , dataCart]));
      setTimeout(() => {
        navigate(`/confirmation`);
      }, 1000);
    }
  };

  const customerInfo = () => {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    setTimeout(() => {
      newData.setCreditcardForm(false);
    }, 1000);
  };
  return (
    <>
      <h1>Card Information</h1>
      <form className="PaymentInfo">
        <label style={cardHolderErr !== "" ? { color: "red" } : {}}>
          {cardHolderErr === "" ? "* Name Card Holder" : cardHolderErr}
          <input
            type="text"
            value={cardHolder}
            onChange={(e) => cardHolderFormChange(e)}
            required
          />
        </label>
        <label style={cardNumberErr !== "" ? { color: "red" } : {}}>
          {cardNumberErr === "" ? "* Card Number" : cardNumberErr}
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => cardNumberFormChange(e)}
            maxLength="19"
            required
          />
        </label>
        <label
          className="CreditcardFormCustomerExp"
          style={expDateErr !== "" ? { color: "red" } : {}}
        >
          {expDateErr === "" ? "* EXP. Date" : expDateErr}
          <input
            type="date"
            value={expDate}
            onChange={(e) => expDateFormChange(e)}
            required
          />
        </label>
        <label
          className="CreditcardFormCustomerExp"
          style={cvcNumeErr !== "" ? { color: "red" } : {}}
        >
          {cvcNumeErr === "" ? "* CVC" : cvcNumeErr}
          <input
            type="password"
            value={cvcNum}
            onChange={(e) => cvcFormChange(e)}
            maxLength="4"
            required
          />
        </label>
      </form>
      {newData.login === true && (
        <div className="CreditcardFormCustomerBtn">
          <button onClick={CardConfirmation}>Pay Now</button>
          <button onClick={customerInfo}>Previous page</button>
        </div>
      )}
    </>
  );
}
