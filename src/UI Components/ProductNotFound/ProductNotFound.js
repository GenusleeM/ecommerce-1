import './ProductNotFound.css'
import $ from 'jquery'
import ProductNotFoundDesktop from './ProductNotFoundDesktop';
import ProductNotFoundTablet from './ProductNotFoundTablet';
import ProductNotFoundMobile from './ProductNotFoundMobile';
import ProductNotFoundMobileLandscape from './ProductNotFoundMobileLandscape';



const ProductNotFound = () => {
    $("html,body").animate({ scrollTop: 0 }, "slow")
    setTimeout(() => {
        $('#loading').removeClass('ProductNotFound-show');
        $('#content').addClass('ProductNotFound-show');
    }, 1000);
    return (
        <>
            <ProductNotFoundDesktop />
            <ProductNotFoundTablet />
            <ProductNotFoundMobile />
            <ProductNotFoundMobileLandscape />
        </>
    )
}

export default ProductNotFound;
