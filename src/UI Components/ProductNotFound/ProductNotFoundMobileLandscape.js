import { useEffect } from "react";
import { MobileLandscape } from "../MediaQuery/MediaQuery";
import { BsShieldExclamation } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProductNotFoundMobileLandscape = () => {
  // Redirected
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <MobileLandscape>
      <div className="ProductNotFound-tablet">
        <div
          id="loading"
          className="ProductNotFound-loading-tablet ProductNotFound-show"
        >
          <h1>Find Product ...</h1>
        </div>
        <div id="content" className="ProductNotFound-content-tablet">
          <BsShieldExclamation />
          <h1>Can not find the page</h1>
          <p>
            Please make Sure the keyword / link that you enter is correct or
          </p>
          <p>we probably don't have this type of item at the moment</p>
        </div>
      </div>
    </MobileLandscape>
  );
};

export default ProductNotFoundMobileLandscape;
