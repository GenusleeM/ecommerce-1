import {
  Desktop,
  Tablet,
  Mobile,
  MobileLandscape,
} from "../../UI Components/MediaQuery/MediaQuery";
import CheckOutDesktop from "./CheckOutDesktop";
import CheckOutTablet from "./CheckOutTablet";
import CheckOutMobileLandscape from "./CheckOutMobileLandscape";
import CheckOutMobile from "./CheckOutMobile";

const CheckOut = () => {
  return (
    <>
      <Desktop>
        <CheckOutDesktop />
      </Desktop>
      <Tablet>
        <CheckOutTablet />
      </Tablet>
      <Mobile>
        <CheckOutMobile />
      </Mobile>
      <MobileLandscape>
        <CheckOutMobileLandscape />
      </MobileLandscape>
    </>
  );
};

export default CheckOut;
