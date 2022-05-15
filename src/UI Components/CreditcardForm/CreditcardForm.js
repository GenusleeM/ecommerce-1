import React from "react";
import {
  Desktop,
  Tablet,
  Mobile,
  MobileLandscape,
} from "../MediaQuery/MediaQuery";
import CreditcardFormDesktop from "./CreditcardFormDesktop";
import CreditcardFormTablet from "./CreditcardFormTablet";
import CreditcardFormMobile from "./CreditcardFormMobile";

export default function CreditcardForm() {
  return (
    <>
      <Desktop>
        <CreditcardFormDesktop />
      </Desktop>
      <Tablet>
        <CreditcardFormTablet />
      </Tablet>
      <Mobile>
        <CreditcardFormMobile />
      </Mobile>
      <MobileLandscape>
        <CreditcardFormTablet />
      </MobileLandscape>
    </>
  );
}
