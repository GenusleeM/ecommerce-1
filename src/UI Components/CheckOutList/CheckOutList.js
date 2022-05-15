import CheckOutListDesktop from "./CheckOutListDesktop";
import CheckOutListTablet from "./CheckOutListTablet";
import CheckOutListMobileLandscape from "./CheckOutListMobileLandscape";
import CheckOutListMobile from "./CheckOutListMobile";
import {
  Desktop,
  Tablet,
  Mobile,
  MobileLandscape,
} from "../MediaQuery/MediaQuery";

const CheckOutList = (props) => {
  return (
    <>
      <Desktop>
        <CheckOutListDesktop data={props.data} />
      </Desktop>
      <Tablet>
        <CheckOutListTablet data={props.data} />
      </Tablet>
      <Mobile>
        <CheckOutListMobile data={props.data} />
      </Mobile>
      <MobileLandscape>
        <CheckOutListMobileLandscape data={props.data} />
      </MobileLandscape>
    </>
  );
};

export default CheckOutList;
