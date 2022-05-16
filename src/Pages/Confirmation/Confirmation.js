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
  const [proccessingData, setProccessingData] = useState(true);

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
        setProccessingData(false);
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
        {proccessingData !== true ? (
          <ConfirmationDesktop name={dataTransaction} />
        ) : (
          <div className="Proccessing">
            <h1>Proccessing...</h1>
          </div>
        )}
      </Desktop>
      <Tablet>
        {proccessingData !== true ? (
          <ConfirmationTablet name={dataTransaction} />
        ) : (
          <div className="Proccessing">
            <h1>Proccessing...</h1>
          </div>
        )}
      </Tablet>
      <Mobile>
        {proccessingData !== true ? (
          <ConfirmationMobile name={dataTransaction} />
        ) : (
          <div className="Proccessing">
            <h1>Proccessing...</h1>
          </div>
        )}
      </Mobile>
      <MobileLandscape>
        {proccessingData !== true ? (
          <ConfirmationMobileLandscape name={dataTransaction} />
        ) : (
          <div className="Proccessing">
            <h1>Proccessing...</h1>
          </div>
        )}
      </MobileLandscape>
    </>
  );
}
