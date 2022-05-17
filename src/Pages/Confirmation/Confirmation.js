import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../UI Components/DataProvider/DataProvider";
import {
  Desktop,
  Tablet,
  Mobile,
  MobileLandscape,
} from "../../UI Components/MediaQuery/MediaQuery";
import ConfirmationDesktop from "./ConfirmationDesktop";
import ConfirmationTablet from "./ConfirmationTablet";
import ConfirmationMobileLandscape from "./ConfirmationMobileLandscape";
import ConfirmationMobile from "./ConfirmationMobile";

export default function Confirmation() {
  // Data Context api
  const newData = useContext(DataContext);

  //   redirect link
  const navigate = useNavigate();

  const [dataTransaction, setDataTransaction] = useState([]);

  useEffect(() => {
    const fullName = [];
    const data = JSON.parse(localStorage.getItem("pay_confirm"));

    if (data.length === 0) {
      navigate("/"); 
    } else {
      const firstName = data[1].customer.firstName;
      const lastName = data[1].customer.lastName;
      fullName.push(`${firstName} ${lastName}`);
      setTimeout(() => {
        setDataTransaction(fullName);
      }, 2000);
    }
  }, []);

  setTimeout(() => {
    localStorage.setItem("pay_confirm", JSON.stringify([]));
    newData.setCart([]);
    newData.setCreditcardForm(false);
    newData.setForchReload(true);
  }, 3000);

  return (
    <>
      <Desktop>
        <ConfirmationDesktop name={dataTransaction} />
      </Desktop>
      <Tablet>
        <ConfirmationTablet name={dataTransaction} />
      </Tablet>
      <Mobile>
        <ConfirmationMobile name={dataTransaction} />
      </Mobile>
      <MobileLandscape>
        <ConfirmationMobileLandscape name={dataTransaction} />
      </MobileLandscape>
    </>
  );
}
