import "./DetailProduct.css";
import DetailProductDesktop from "./DetailProductDesktop";
import DetailProductTablet from "./DetailProductTablet";
import DetailProductMobile from "./DetailProductMobile";
import DetailProductMobileLandscape from "./DetailProductMobileLandscape";
import {
  Desktop,
  Tablet,
  Mobile,
  MobileLandscape,
} from "../../UI Components/MediaQuery/MediaQuery";

const DetailProduct = () => {
  return (
    <>
      <Desktop>
        <DetailProductDesktop />
      </Desktop>
      <Tablet>
        <DetailProductTablet />
      </Tablet>
      <Mobile>
        <DetailProductMobile />
      </Mobile>
      <MobileLandscape>
        <DetailProductMobileLandscape />
      </MobileLandscape>
    </>
  );
};

export default DetailProduct;
