import { useEffect, useState, useContext } from "react";
import { DataContext } from "../../UI Components/DataProvider/DataProvider";
import HomeVideo from "../../Asset/home.mp4";
import HomeMobile from "../../Asset/home-mobile.jpeg"
import Woman from "../../Asset/womans.png"
import Men from "../../Asset/mens.png"
import Children from "../../Asset/childrens.png"
import { BsForwardFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Carousel from "../../UI Components/Carousel/Carousel";
import LinkImage from "../../UI Components/LinkImage/LinkImage";
import LinkLineBtn from "../../UI Components/LinkLineBtn/LinkLineBtn";
import Feature from "../../UI Components/Feature/Feature";
import { Desktop, Mobile, MobileLandscape, Tablet } from "../../UI Components/MediaQuery/MediaQuery";
import HeaderImage from "../../UI Components/HeaderImage/HeaderImage";
import $ from 'jquery'
import "./Home.css";
import MetaData from "../../UI Components/MetaData/MetaData";

const Home = () => {

    // Data Context Hooks
    const newData = useContext(DataContext);

    // Navigation Variable
    let navigate = useNavigate();
    const linkHandeler = (e, info) => {
        e.preventDefault();
        navigate(`/product/${info}`, { replace: true });;
    }


    // Product State
    const [newModelProuct, setNewModelProduct] = useState([])
    const [topSellerProuct, setTopSellerProduct] = useState([])

    // get similar items
    // Please create another useEffect for filter data top seller
    // at the moment this useEffect only get all data collection but later suppose to be New Model and Top Seller
    useEffect(() => {
        $("html,body").animate({ scrollTop: 0 }, "slow");
        if (newData.isPending === false) {
            let findProductById = newData.data && newData.data.filter((obj) => obj.collection.includes('Shoes'));
            let shuffle = findProductById && findProductById.sort(() => Math.random() - 0.5)
            setTimeout(() => {
                setNewModelProduct(shuffle);
                setTopSellerProduct(shuffle);
            }, 500);
        }
    }, [newData.isPending]);
    return (
        <div className="Home">
            <MetaData title="HOME"/>
            {/* HEADER */}
            <Desktop>
                <HeaderImage file={HomeVideo} fileInfo="video">
                    <h1>SEASONAL EVENTS</h1>
                    <h2>Up to 50% discount on classic models.</h2>
                    <div className="Home-header-title-top-btn-list">
                        <div className="Home-header-title-top-btn" onClick={(e) => linkHandeler(e, 'man')}>
                            <span>For Men </span> <BsForwardFill />
                        </div>
                        <div className="Home-header-title-top-btn" onClick={(e) => linkHandeler(e, 'woman')}>
                            <span>For Woman </span> <BsForwardFill />
                        </div>
                        <div className="Home-header-title-top-btn" onClick={(e) => linkHandeler(e, 'children')}>
                            <span>For Children </span> <BsForwardFill />
                        </div>
                    </div>
                </HeaderImage>
            </Desktop>
            <Tablet>
                <HeaderImage file={HomeVideo} fileInfo="video">
                    <h1>SEASONAL EVENTS</h1>
                    <h2>Up to 50% discount on classic models.</h2>
                    <div className="Home-header-title-top-btn-list-tablet">
                        <div className="Home-header-title-top-btn-tablet" onClick={(e) => linkHandeler(e, 'man')}>
                            <span>For Men </span> <BsForwardFill />
                        </div>
                        <div className="Home-header-title-top-btn-tablet" onClick={(e) => linkHandeler(e, 'woman')}>
                            <span>For Woman </span> <BsForwardFill />
                        </div>
                        <div className="Home-header-title-top-btn-tablet" onClick={(e) => linkHandeler(e, 'children')}>
                            <span>For Children </span> <BsForwardFill />
                        </div>
                    </div>
                </HeaderImage>
            </Tablet>
            <Mobile>
                <HeaderImage file={HomeMobile} fileInfo="image">
                    <h1>SEASONAL EVENTS</h1>
                    <h2>Up to 50% discount on classic models.</h2>
                    <div className="Home-header-title-top-btn-list-mobile">
                        <div className="Home-header-title-top-btn-mobile" onClick={(e) => linkHandeler(e, 'man')}>
                            <span>For Men </span> <BsForwardFill />
                        </div>
                        <div className="Home-header-title-top-btn-mobile" onClick={(e) => linkHandeler(e, 'woman')}>
                            <span>For Woman </span> <BsForwardFill />
                        </div>
                        <div className="Home-header-title-top-btn-mobile" onClick={(e) => linkHandeler(e, 'children')}>
                            <span>For Children </span> <BsForwardFill />
                        </div>
                    </div>
                </HeaderImage>
            </Mobile>
            <MobileLandscape>
                <HeaderImage file={HomeVideo} fileInfo="video">
                    <h1>SEASONAL EVENTS</h1>
                    <h2>Up to 50% discount on classic models.</h2>
                    <div className="Home-header-title-top-btn-list-mobileLandscape">
                        <div className="Home-header-title-top-btn-mobileLandscape" onClick={(e) => linkHandeler(e, 'man')}>
                            <span>For Men </span> <BsForwardFill />
                        </div>
                        <div className="Home-header-title-top-btn-mobileLandscape" onClick={(e) => linkHandeler(e, 'woman')}>
                            <span>For Woman </span> <BsForwardFill />
                        </div>
                        <div className="Home-header-title-top-btn-mobileLandscape" onClick={(e) => linkHandeler(e, 'children')}>
                            <span>For Children </span> <BsForwardFill />
                        </div>
                    </div>
                </HeaderImage>
            </MobileLandscape>


            {/* CONTENT */}
            <Desktop>
                <div className="Home-content">
                    <div className="Home-Favorite">
                        <h1>JUST FAVORITES</h1>
                        <div className="Home-Favorite-link">
                            <LinkLineBtn title="T-Shirt" />
                            <LinkLineBtn title="Shoes" />
                            <LinkLineBtn title="Trousers" />
                        </div>
                    </div>
                    <div className="Home-img-link-list">
                        <LinkImage image={Woman} goTo="Women" />
                        <LinkImage image={Men} goTo="Men" />
                        <LinkImage image={Children} goTo="Children" />
                    </div>
                </div>
                <div className="Home-newModel">
                    <Carousel title="NEW MODELS" data={newModelProuct} />
                    <Carousel title="THE BEST OF ADIDAS" data={topSellerProuct} />
                    <Feature title="FEATURES" />
                </div>
                <div className="Home-discount">
                    <div className="Home-discount-countainer">
                        <h1>SIGN UP AND GET 20% OFF</h1>
                        <div className="Home-header-title-top-btn" onClick={(e) => linkHandeler(e, 'woman')}>
                            <span>New Member </span> <BsForwardFill />
                        </div>
                    </div>
                </div>
            </Desktop>
            <Tablet>
                <div className="Home-content-tablet">
                    <div className="Home-Favorite-tablet">
                        <h1>JUST FAVORITES</h1>
                        <div className="Home-Favorite-link-tablet">
                            <LinkLineBtn title="T-Shirt" />
                            <LinkLineBtn title="Shoes" />
                            <LinkLineBtn title="Trousers" />
                        </div>
                    </div>
                    <div className="Home-img-link-list-tablet">
                        <LinkImage image={Woman} goTo="Women" />
                        <LinkImage image={Men} goTo="Men" />
                        <LinkImage image={Children} goTo="Children" />
                    </div>
                </div>
                <div className="Home-newModel-tablet">
                    <Carousel title="NEW MODELS" data={newModelProuct} />
                    <Carousel title="THE BEST OF ADIDAS" data={topSellerProuct} />
                    <Feature title="FEATURES" />
                </div>
                <div className="Home-discount-tablet">
                    <div className="Home-discount-countainer-tablet">
                        <h1>SIGN UP AND GET 20% OFF</h1>
                        <div className="Home-header-title-top-btn-tablet" onClick={(e) => linkHandeler(e, 'woman')}>
                            <span>New Member </span> <BsForwardFill />
                        </div>
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <div className="Home-content-mobile">
                    <div className="Home-Favorite-mobile">
                        <h1>JUST FAVORITES</h1>
                        <div className="Home-Favorite-link-mobile">
                            <LinkLineBtn title="T-Shirt" />
                            <LinkLineBtn title="Shoes" />
                            <LinkLineBtn title="Trousers" />
                        </div>
                    </div>
                    <div className="Home-img-link-list-mobile">
                        <LinkImage image={Woman} goTo="Women" />
                        <LinkImage image={Men} goTo="Men" />
                        <LinkImage image={Children} goTo="Children" />
                    </div>
                </div>
                <div className="Home-newModel">
                    <Carousel title="NEW MODELS" data={newModelProuct} />
                    <Carousel title="THE BEST OF ADIDAS" data={topSellerProuct} />
                    <Feature title="FEATURES" />
                </div>
                <div className="Home-discount-mobile">
                    <div className="Home-discount-countainer-mobile">
                        <h1>SIGN UP AND GET</h1>
                        <h1> 20% OFF</h1>
                        <br />
                        <div className="Home-header-title-top-btn-mobile" onClick={(e) => linkHandeler(e, 'woman')}>
                            <span>New Member </span> <BsForwardFill />
                        </div>
                    </div>
                </div>
            </Mobile>
            <MobileLandscape>
                <div className="Home-content-mobileLandscape">
                    <div className="Home-Favorite-mobileLandscape">
                        <h1>JUST FAVORITES</h1>
                        <div className="Home-Favorite-link-mobileLandscape">
                            <LinkLineBtn title="T-Shirt" />
                            <LinkLineBtn title="Shoes" />
                            <LinkLineBtn title="Trousers" />
                        </div>
                    </div>
                    <div className="Home-img-link-list-mobileLandscape">
                        <LinkImage image={Woman} goTo="Women" />
                        <LinkImage image={Men} goTo="Men" />
                        <LinkImage image={Children} goTo="Children" />
                    </div>
                </div>
                <div className="Home-newModel-mobileLandscape">
                    <Carousel title="NEW MODELS" data={newModelProuct} />
                    <Carousel title="THE BEST OF ADIDAS" data={topSellerProuct} />
                    <Feature title="FEATURES" />
                </div>
                <div className="Home-discount-mobileLandscape">
                    <div className="Home-discount-countainer-mobileLandscape">
                        <h1>SIGN UP AND GET 20% OFF</h1>
                        <div className="Home-header-title-top-btn-mobileLandscape" onClick={(e) => linkHandeler(e, 'woman')}>
                            <span>New Member </span> <BsForwardFill />
                        </div>
                    </div>
                </div>
            </MobileLandscape>
        </div>
    );
};

export default Home;
