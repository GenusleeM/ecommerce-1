import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import "./CreditcardForm.css";
import PhoneCode from "country-json/src/country-by-calling-code.json";
import Flag from "country-json/src/country-by-flag.json";
import CardInfoForm from "./CardInfoForm";
import $ from "jquery";

export default function CreditcardFormTablet() {
   // Data Context Hooks
   const newData = useContext(DataContext);

   // SHIPPING ADDRESS
   const [firstName, setFirstName] = useState("");
   const [firstNameErr, setFirstNameErr] = useState("");
   const firstNameFormChange = (e) => {
     setFirstName(e.target.value);
   };
   const [lastName, setLastName] = useState("");
   const [lastNameErr, setLastNameErr] = useState("");
   const LastNameFormChange = (e) => {
     setLastName(e.target.value);
   };
 
   const [address, setAddress] = useState("");
   const [addressErr, setAddressErr] = useState("");
   const addressFormChange = (e) => {
     setAddress(e.target.value);
   };
 
   const [aptNum, setAptNum] = useState("");
   const [aptNumErr, setAptNumErr] = useState("");
   const aptNumFormChange = (e) => {
     setAptNum(e.target.value);
   };
 
   const [city, setCity] = useState("");
   const [cityErr, setCityErr] = useState("");
   const cityFormChange = (e) => {
     setCity(e.target.value);
   };
 
   const [country, setCountry] = useState("");
   const [countryErr, setCountryErr] = useState("");
   const countryFormChange = (e) => {
     setCountry(e.target.value);
   };
 
   const [phCode, setPhCode] = useState(0);
   const [phCodeFlag, setPhCodeFlag] = useState("");
   const [phone, setPhone] = useState("");
   const [phoneErr, setPhoneErr] = useState("");
   const phoneFormChange = (e) => {
     setPhone(e.target.value);
   };
 
   const [email, setEmail] = useState("");
   const [emailErr, setEmailErr] = useState("");
   const emailFormChange = (e) => {
     setEmail(e.target.value);
   };
 
   useEffect(() => {
     if (country !== "") {
       // Get Phone Country Code
       const phoneCode = PhoneCode.filter((x) => x.country === country);
       setPhCode(phoneCode[0].calling_code);
 
       // Get Country Flag
       const flag = Flag.filter((x) => x.country === country);
       setPhCodeFlag(flag[0].flag_base64);
     } else {
       setPhCode("00");
       setPhCodeFlag("");
     }
   }, [country]);
 
   const shippingConfirmation = () => {
     $("html,body").animate({ scrollTop: 0 }, "slow");
 
     firstName === ""
       ? setFirstNameErr("* First Name ( Important ! )")
       : setFirstNameErr("");
     lastName === ""
       ? setLastNameErr("* Last Name ( Important ! )")
       : setLastNameErr("");
     address === ""
       ? setAddressErr("* Address ( Important ! )")
       : setAddressErr("");
     aptNum === ""
       ? setAptNumErr("* Apartment No ( Important ! )")
       : setAptNumErr("");
     city === "" ? setCityErr("* City ( Important ! )") : setCityErr("");
     country === ""
       ? setCountryErr("* Country ( Important ! )")
       : setCountryErr("");
     phone === "" ? setPhoneErr("* Phone ( Important ! )") : setPhoneErr("");
     email === "" ? setEmailErr("* E-mail ( Important ! )") : setEmailErr("");
 
     if (
       firstName !== "" &&
       lastName !== "" &&
       address !== "" &&
       aptNum !== "" &&
       city !== "" &&
       country !== "" &&
       phone !== "" &&
       email !== ""
     ) {
       $("html,body").animate({ scrollTop: 0 }, "slow");
       let payment = [];
       const customer = {
         customer: {
           firstName: firstName,
           lastName: lastName,
           address: address,
           aptNum: aptNum,
           city: city,
           country: country,
           phone: `${phCode} ${phone}`,
           email: email,
         },
       }
 
       payment.push(customer);
       localStorage.setItem("pay_confirm", JSON.stringify(payment));
       setTimeout(() => {
         newData.setCreditcardForm(true);
       }, 1000);
     }
   };
 
   const cancelPayment = () => {
     $("html,body").animate({ scrollTop: 0 }, "slow");
     localStorage.removeItem("pay_confirm");
     setTimeout(() => {
       newData.setProccessing(false);
     }, 1000);
   };


  return (
    <div className="CreditcardForm-Tablet">
      <div className="CreditcardFormCustomer-Tablet">
        {newData.creditcardForm !== true ? (
          <>
            <h1>Shipping Address</h1>
            <form>
              <label style={firstNameErr !== "" ? { color: "red" } : {}}>
                {firstNameErr === "" ? "* First Name" : firstNameErr}
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => firstNameFormChange(e)}
                  required
                />
              </label>
              <label style={lastNameErr !== "" ? { color: "red" } : {}}>
                {lastNameErr === "" ? "* Last Name" : lastNameErr}
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => LastNameFormChange(e)}
                  required
                />
              </label>
              <label
                className="CreditcardFormCustomerAddress-Tablet"
                style={addressErr !== "" ? { color: "red" } : {}}
              >
                {addressErr === "" ? "* Address" : addressErr}
                <input
                  type="text"
                  value={address}
                  onChange={(e) => addressFormChange(e)}
                  required
                />
              </label>
              <label
                className="CreditcardFormCustomerAptNum-Tablet"
                style={aptNumErr !== "" ? { color: "red" } : {}}
              >
                {aptNumErr === "" ? "* Apartment No" : aptNumErr}
                <input
                  type="text"
                  value={aptNum}
                  onChange={(e) => aptNumFormChange(e)}
                  required
                />
              </label>
              <label
                className="CreditcardFormCustomerAptNum-Tablet"
                style={cityErr !== "" ? { color: "red" } : {}}
              >
                {cityErr === "" ? "* City" : cityErr}
                <input
                  type="text"
                  value={city}
                  onChange={(e) => cityFormChange(e)}
                  required
                />
              </label>
              <label
                className="CreditcardFormCustomerAptNum-Tablet"
                style={countryErr !== "" ? { color: "red" } : {}}
              >
                {countryErr === "" ? "* Country" : countryErr}
                <select
                  type="text"
                  value={country}
                  onChange={(e) => countryFormChange(e)}
                  required
                >
                  <option value="">-</option>
                  {PhoneCode.map((data, index) => (
                    <option key={index + data} value={data.country}>
                      {data.country}
                    </option>
                  ))}
                </select>
              </label>
              <label style={phoneErr !== "" ? { color: "red" } : {}}>
                {phoneErr === "" ? "* Phone Number" : phoneErr}
                <div className="CreditcardFormCustomerPhone-Tablet">
                  <h4 className="CreditcardFormCustomerPhoneCode-Tablet">
                    {phCodeFlag !== "" && <img src={phCodeFlag} alt="Flag" />}(
                    {phCode > 0 ? `+${phCode}` : "+00"})
                  </h4>
                  <input
                    className="CreditcardFormCustomerPhoneNumber-Tablet"
                    type="number"
                    value={phone}
                    onChange={(e) => phoneFormChange(e)}
                    required
                  />
                </div>
              </label>
              <label style={emailErr !== "" ? { color: "red" } : {}}>
                {emailErr === "" ? "* E-mail" : emailErr}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => emailFormChange(e)}
                  required
                />
              </label>
            </form>
            {newData.login === true && (
              <div className="CreditcardFormCustomerBtn-Tablet">
              <button onClick={shippingConfirmation}>Next</button>
              <button onClick={cancelPayment}>Cancel</button>
              </div>
            )}
          </>
        ) : (
          <CardInfoForm/>
        )}
      </div>
    </div>
  );
}
