import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import $ from "jquery";
import './CreditcardForm.css'

export default function CardInfoFormMobile() {
  // Data Context Hooks
  const newData = useContext(DataContext);

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

  const [expDate, setExpDate] = useState("05/05/2022");
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
      $("html,body").animate({ scrollTop: 0 }, "slow");
      setTimeout(() => {
        alert("Go to te finishing page");
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
        <div className="CreditcardFormCustomerBtn-Tablet">
          <button onClick={CardConfirmation}>Pay Now</button>
          <button onClick={customerInfo}>Previous page</button>
        </div>
      )}
    </>
  );
}
