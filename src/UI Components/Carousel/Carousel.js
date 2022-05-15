import "./Carousel.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import ProductCard from "../ProductCard/ProductCard";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import {
    Desktop,
    Mobile,
    MobileLandscape,
    Tablet,
} from "../../UI Components/MediaQuery/MediaQuery";
const Carousel = (props) => {
    // Product Data Props
    const items = props.data;

    const [totalSlideDesktop, setTotalSlideDesktop] = useState(0);
    const [totalSlideTablet, setTotalSlideTablet] = useState(0);
    const [totalSlideMobile, setTotalSlideMobile] = useState(0);

    // Total slide desktop
    useEffect(() => {
        if (totalSlideDesktop === 0) {
            items.slice(0, 6).length !== 0 && setTotalSlideDesktop(totalSlideDesktop + 1);
        }
        if (totalSlideDesktop === 1) {
            items.slice(6, 12).length !== 0 && setTotalSlideDesktop(totalSlideDesktop + 1);
        }
        if (totalSlideDesktop === 2) {
            items.slice(12, 18).length !== 0 && setTotalSlideDesktop(totalSlideDesktop + 1);
        }
    }, [totalSlideDesktop, items]);

    // Total slide tablet
    useEffect(() => {
        if (totalSlideTablet === 0) {
            items.slice(0, 4).length !== 0 && setTotalSlideTablet(totalSlideTablet + 1);
        }
        if (totalSlideTablet === 1) {
            items.slice(4, 8).length !== 0 && setTotalSlideTablet(totalSlideTablet + 1);
        }
        if (totalSlideTablet === 2) {
            items.slice(8, 12).length !== 0 && setTotalSlideTablet(totalSlideTablet + 1);
        }
    }, [totalSlideTablet, items]);

    // Total slide mobile
    useEffect(() => {
        if (totalSlideMobile === 0) {
            items.slice(0, 2).length !== 0 && setTotalSlideMobile(totalSlideMobile + 1);
        }
        if (totalSlideMobile === 1) {
            items.slice(2, 4).length !== 0 && setTotalSlideMobile(totalSlideMobile + 1);
        }
        if (totalSlideMobile === 2) {
            items.slice(4, 6).length !== 0 && setTotalSlideMobile(totalSlideMobile + 1);
        }
    }, [totalSlideTablet, items]);

    return (
        <>
            <Desktop>
                <div className="Carousel-container">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={27}
                        totalSlides={totalSlideDesktop}
                    >
                        <div className="Carousel">
                            <h1>
                                {props.title} | <span>Show All</span>
                            </h1>
                            <div>
                                <ButtonBack>
                                    <BsFillCaretLeftFill />
                                </ButtonBack>
                                <ButtonNext>
                                    <BsFillCaretRightFill />
                                </ButtonNext>
                            </div>
                        </div>
                        <Slider>
                            <Slide index={0}>
                                <div className="Carousel-list">
                                    {items.slice(0, 6).map((data, index) => (
                                        <ProductCard
                                            key={index}
                                            id={data.id}
                                            image={data.image[0]}
                                            prodTitle={data.name}
                                            gender={data.gender}
                                            price={data.price}
                                            color={data.color}
                                            info="50% Disc"
                                        />
                                    ))}
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="Carousel-list">
                                    {items.slice(6, 12).map((data, index) => (
                                        <ProductCard
                                            key={index}
                                            id={data.id}
                                            image={data.image[0]}
                                            prodTitle={data.name}
                                            gender={data.gender}
                                            price={data.price}
                                            color={data.color}
                                            info="50% Disc"
                                        />
                                    ))}
                                </div>
                            </Slide>
                            <Slide index={3}>
                                <div className="Carousel-list">
                                    {items.slice(12, 18).map((data, index) => (
                                        <ProductCard
                                            key={index}
                                            id={data.id}
                                            image={data.image[0]}
                                            prodTitle={data.name}
                                            gender={data.gender}
                                            price={data.price}
                                            color={data.color}
                                            info="50% Disc"
                                        />
                                    ))}
                                </div>
                            </Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </Desktop>
            <Tablet>
                <div className="Carousel-container-tablet">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={38}
                        totalSlides={totalSlideTablet}
                    >
                        <div className="Carousel-tablet">
                            <h1>
                                {props.title} | <span>Show All</span>
                            </h1>
                            <div>
                                <ButtonBack>
                                    <BsFillCaretLeftFill />
                                </ButtonBack>
                                <ButtonNext>
                                    <BsFillCaretRightFill />
                                </ButtonNext>
                            </div>
                        </div>
                        <Slider>
                            <Slide index={0}>
                                <div className="Carousel-list-tablet">
                                    {items.slice(0, 4).map((data, index) => (
                                        <ProductCard
                                            key={index}
                                            id={data.id}
                                            image={data.image[0]}
                                            prodTitle={data.name}
                                            gender={data.gender}
                                            price={data.price}
                                            color={data.color}
                                            info="50% Disc"
                                        />
                                    ))}
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="Carousel-list-tablet">
                                    {items.slice(4, 8).map((data, index) => (
                                        <ProductCard
                                            key={index}
                                            id={data.id}
                                            image={data.image[0]}
                                            prodTitle={data.name}
                                            gender={data.gender}
                                            price={data.price}
                                            color={data.color}
                                            info="50% Disc"
                                        />
                                    ))}
                                </div>
                            </Slide>
                            <Slide index={3}>
                                <div className="Carousel-list-tablet">
                                    {items.slice(8, 12).map((data, index) => (
                                        <ProductCard
                                            key={index}
                                            id={data.id}
                                            image={data.image[0]}
                                            prodTitle={data.name}
                                            gender={data.gender}
                                            price={data.price}
                                            color={data.color}
                                            info="50% Disc"
                                        />
                                    ))}
                                </div>
                            </Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </Tablet>
            <Mobile>
                <div className="Carousel-container-mobile">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={90}
                        totalSlides={totalSlideMobile}
                    >
                        <div className="Carousel-mobile">
                            <h1>
                                {props.title} | <span>Show All</span>
                            </h1>
                            <div>
                                <ButtonBack>
                                    <BsFillCaretLeftFill />
                                </ButtonBack>
                                <ButtonNext>
                                    <BsFillCaretRightFill />
                                </ButtonNext>
                            </div>
                        </div>
                        <Slider>
                            <Slide index={0}>
                                <div className="Carousel-list-mobile">
                                    {items.slice(0, 2).map((data, index) => (
                                        <ProductCard
                                            key={index}
                                            id={data.id}
                                            image={data.image[0]}
                                            prodTitle={data.name}
                                            gender={data.gender}
                                            price={data.price}
                                            color={data.color}
                                            info="50% Disc"
                                        />
                                    ))}
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="Carousel-list-mobile">
                                    {items.slice(2, 4).map((data, index) => (
                                        <ProductCard
                                            key={index}
                                            id={data.id}
                                            image={data.image[0]}
                                            prodTitle={data.name}
                                            gender={data.gender}
                                            price={data.price}
                                            color={data.color}
                                            info="50% Disc"
                                        />
                                    ))}
                                </div>
                            </Slide>
                            <Slide index={3}>
                                <div className="Carousel-list-mobile">
                                    {items.slice(4, 6).map((data, index) => (
                                        <ProductCard
                                            key={index}
                                            id={data.id}
                                            image={data.image[0]}
                                            prodTitle={data.name}
                                            gender={data.gender}
                                            price={data.price}
                                            color={data.color}
                                            info="50% Disc"
                                        />
                                    ))}
                                </div>
                            </Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </Mobile>
            <MobileLandscape>
                <div className="Carousel-container-tablet">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={38}
                        totalSlides={totalSlideTablet}
                    >
                        <div className="Carousel-tablet">
                            <h1>
                                {props.title} | <span>Show All</span>
                            </h1>
                            <div>
                                <ButtonBack>
                                    <BsFillCaretLeftFill />
                                </ButtonBack>
                                <ButtonNext>
                                    <BsFillCaretRightFill />
                                </ButtonNext>
                            </div>
                        </div>
                        <Slider>
                            <Slide index={0}>
                                <div className="Carousel-list-tablet">
                                    {items.slice(0, 4).map((data, index) => (
                                        <ProductCard
                                            key={index}
                                            id={data.id}
                                            image={data.image[0]}
                                            prodTitle={data.name}
                                            gender={data.gender}
                                            price={data.price}
                                            color={data.color}
                                            info="50% Disc"
                                        />
                                    ))}
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="Carousel-list-tablet">
                                    {items.slice(4, 8).map((data, index) => (
                                        <ProductCard
                                            key={index}
                                            id={data.id}
                                            image={data.image[0]}
                                            prodTitle={data.name}
                                            gender={data.gender}
                                            price={data.price}
                                            color={data.color}
                                            info="50% Disc"
                                        />
                                    ))}
                                </div>
                            </Slide>
                            <Slide index={3}>
                                <div className="Carousel-list-tablet">
                                    {items.slice(8, 12).map((data, index) => (
                                        <ProductCard
                                            key={index}
                                            id={data.id}
                                            image={data.image[0]}
                                            prodTitle={data.name}
                                            gender={data.gender}
                                            price={data.price}
                                            color={data.color}
                                            info="50% Disc"
                                        />
                                    ))}
                                </div>
                            </Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </MobileLandscape>
        </>
    );
};

export default Carousel;
