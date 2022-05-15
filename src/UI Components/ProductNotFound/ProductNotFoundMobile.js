import { useEffect } from "react";
import { Mobile} from '../MediaQuery/MediaQuery';
import { BsShieldExclamation } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const ProductNotFoundMobile = () => {
    // Redirected
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
          }, 3000);
      }, []);

    return (
        <Mobile>
            <div className='ProductNotFound-mobile'>
                <div id='loading' className='ProductNotFound-loading-mobile ProductNotFound-show'><h1>Find Product ...</h1></div>
                <div id='content' className='ProductNotFound-content-mobile'>
                    <BsShieldExclamation />
                    <h1>Can not find the page</h1>
                    <p>Please make Sure the keyword / link that you enter is correct or</p>
                    <p>we probably don't have this type of item at the moment</p>
                </div>
            </div>
        </Mobile>
    )
}

export default ProductNotFoundMobile;
